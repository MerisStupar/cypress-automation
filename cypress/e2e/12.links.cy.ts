describe('Dealing with links', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/links`, {timeout: 5000});
    });

    it.skip('First approach, not click on the link', () => {
        cy.get('#simpleLink').should('have.attr', 'href', 'https://demoqa.com');
        cy.get('#simpleLink').should('have.attr', 'target', "_blank");
    });

    it.skip('Secon approach, remove the target', () => {
        cy.get('#simpleLink').invoke('removeAttr', 'target').click();
        cy.url().then((url)=>{
            expect(url).to.be.equal('https://demoqa.com/');
        })
    });
});


describe('Intercepting API(SPYING) request after clicking on the button', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/links`, {timeout: 5000});

    });


    it('Intercepting CREATED link  - CREATED', () => {

        cy.intercept('GET', `${Cypress.env("demoQA")}/created`).as('linkStatus')

        cy.get('a#created').click()
        cy.get('#linkResponse').should('have.text', "Link has responded with staus 201 and status text Created")
        cy.wait('@linkStatus').then((request)=>{
            cy.log('This is the request intercepted', request);
            expect(request.response.statusCode).to.be.equal(201);
            expect(request.response.statusMessage).to.be.equal('Created');
        });
    });

    it('Intercepting NO CONTENT link - NO CONTENT', () => {
        
        cy.intercept('GET', `${Cypress.env("demoQA")}/no-content`).as("no-content");
        
        cy.get("#no-content").click()
        cy.get("#linkResponse").should('have.text', "Link has responded with staus 204 and status text No Content");
    });

});