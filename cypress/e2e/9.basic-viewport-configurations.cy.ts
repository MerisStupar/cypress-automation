describe('cy.viewport() - DEMO', () => {

    beforeEach(()=>{
        cy.visit(`${Cypress.env("angular")}/angularjs-protractor-practice-site`);
    });

    it('Device name', () => {
        cy.viewport('iphone-8');
        cy.get('#mobile_menu_toggler').should('be.visible');
    });

    it('Specific viewport', () => {
        cy.viewport(500,600);
        cy.get('#mobile_menu_toggler').should('be.visible');
    });


});