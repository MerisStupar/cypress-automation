describe('Menu Describe', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/menu`, {timeout:20000});
    });

    it('Menu Demo', () => {
        cy.get('a').contains('Main Item 2').realHover();
        cy.get('a').contains('SUB SUB LIST »').realHover()
        cy.get('a').contains('Sub Sub Item 1')
    });
});