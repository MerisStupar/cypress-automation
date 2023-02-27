describe('Demo QA', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/buttons`, {timeout: 5000});
    });

    it('Double click test', () => {
        cy.get('#doubleClickBtn').dblclick()
        cy.get(`#doubleClickMessage`).should('have.text', "You have done a double click");
    });

    it('Right click test', () => {
        cy.get('#rightClickBtn').rightclick()
        cy.get(`#rightClickMessage`).should('have.text', "You have done a right click");
    });

    it('Click dynamic button', () => {
        cy.get(`.btn-primary`).eq(2)
        .contains('Click Me')
        .click();
        cy.get('#dynamicClickMessage').should('have.text', "You have done a dynamic click");
    });
});