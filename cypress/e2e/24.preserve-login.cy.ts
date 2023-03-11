Cypress.session.clearAllSavedSessions();

describe('Basics - Preserve login', () => {
    
    beforeEach(()=>{
        cy.session('mySession', ()=>{
            cy.visit(`${Cypress.env("demoQA")}/login`, {timeout: 20000});
            cy.get('#userName').type('test');
            cy.get('#password').type('Test1234*');
            cy.get('#login').click();
            cy.url().should('contain', 'profile');
        });
    });

    it('Check if session was saved', () => {
        cy.visit(`${Cypress.env("demoQA")}/login`, {timeout: 20000});
    });

    it('Check if session was saved', () => {
        cy.visit(`${Cypress.env("demoQA")}/login`, {timeout: 20000});
    });

});