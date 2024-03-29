describe.skip('Dealing with links', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/links`, {timeout: 5000});
    });

    it('First approach, not click on the link', () => {
        cy.get('#simpleLink').should('have.attr', 'href', 'https://demoqa.com');
        cy.get('#simpleLink').should('have.attr', 'target', "_blank");
    });

    it('Secon approach, remove the target', () => {
        cy.get('#simpleLink').invoke('removeAttr', 'target').click();
        cy.url().then((url)=>{
            expect(url).to.be.equal('https://demoqa.com/');
        })
    });
});


describe('Intercepting API(SPYING) request after clicking on the button', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/links`, {timeout: 20000});

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

        cy.wait('@no-content').then((request)=>{
            cy.log('This is the intercepted request', request);
            expect(request.response.statusCode).to.be.equal(204);
            expect(request.response.statusMessage).to.be.equal('No Content');
        });
    });

    it('Intercepting MOVED link - MOVED', () => {
        
        cy.intercept('GET', `${Cypress.env("demoQA")}/moved`).as("moved");

        cy.get('#moved').click();
        cy.get('#linkResponse').should('have.text', "Link has responded with staus 301 and status text Moved Permanently");

        cy.wait('@moved').then((request)=>{
            cy.log('This is the intercepted request', request);
            expect(request.response.statusCode).to.be.equal(301)
            expect(request.response.statusMessage).to.be.equal('Moved Permanently');
        });
    });

    it('Intercepting BAD REQUEST link - BAD REQUEST', () => {
        
        cy.intercept('GET', `${Cypress.env("demoQA")}/bad-request`).as("bad-request");

        cy.get('#bad-request').click();
        cy.get('#linkResponse').should('have.text', "Link has responded with staus 400 and status text Bad Request");

        cy.wait('@bad-request').then((request)=>{
            cy.log('This is the intercepted request', request);
            expect(request.response.statusCode).to.be.equal(400)
            expect(request.response.statusMessage).to.be.equal('Bad Request');
        });
    });

    it('Intercepting UNAUTHORIZED link - UNAUTHORIZED', () => {
        
        cy.intercept('GET', `${Cypress.env("demoQA")}/unauthorized`).as("unauthorized");

        cy.get('#unauthorized').click();
        cy.get('#linkResponse').should('have.text', "Link has responded with staus 401 and status text Unauthorized");

        cy.wait('@unauthorized').then((request)=>{
            cy.log('This is the intercepted request', request);
            expect(request.response.statusCode).to.be.equal(401)
            expect(request.response.statusMessage).to.be.equal('Unauthorized');
        });
    });

    it('Intercepting FROBIDDEN link - FROBIDDEN', () => {
        
        cy.intercept('GET', `${Cypress.env("demoQA")}/unauthorized`).as("unauthorized");

        cy.get('#unauthorized').click();
        cy.get('#linkResponse').should('have.text', "Link has responded with staus 401 and status text Unauthorized");

        cy.wait('@unauthorized').then((request)=>{
            cy.log('This is the intercepted request', request);
            expect(request.response.statusCode).to.be.equal(401)
            expect(request.response.statusMessage).to.be.equal('Unauthorized');
        });
    });


    
    it('Intercepting NOT FOUND link - NOT FOUND', () => {
        
        cy.intercept('GET', `${Cypress.env("demoQA")}/invalid-url`).as("invalid-url");

        cy.get('#invalid-url').click();
        cy.get('#linkResponse').should('have.text', "Link has responded with staus 404 and status text Not Found");

        cy.wait('@invalid-url').then((request)=>{
            cy.log('This is the intercepted request', request);
            expect(request.response.statusCode).to.be.equal(404)
            expect(request.response.statusMessage).to.be.equal('Not Found');
        });
    });

});