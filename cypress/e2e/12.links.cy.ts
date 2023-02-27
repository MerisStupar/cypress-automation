describe('Dealing with links', () => {
    
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