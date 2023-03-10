describe('Basics - Preserve login', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/login`, {timeout: 20000});
    });

    it('Check if session was saved', () => {
        
    });

});