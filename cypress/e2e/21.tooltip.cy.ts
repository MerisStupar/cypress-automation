describe('Tooltips describe', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/tool-tips`, {timeout: 20000});
    });


    it("Tooltip Button", ()=>{
        cy.get('#toolTipButton').realHover();
        cy.get(`div[role='tooltip']`);
        cy.get('.tooltip-inner').should('have.text', "You hovered over the Button");
    });


    it.only("A tag tooltip", ()=>{
        cy.contains('a', 'Contrary').realHover();
        cy.get('.tooltip-inner').should('have.text', "You hovered over the Contrary");
    });


});