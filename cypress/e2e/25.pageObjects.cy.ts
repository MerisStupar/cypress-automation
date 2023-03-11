Cypress.session.clearAllSavedSessions();


describe('Basics', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/login`,{timeout: 20000});
    }); 


    it('Sucess Login Scenario ', () => {
        cy.get('#userName').type('test');
        cy.get('#password').type('Test1234*');
        cy.get('#login').click();
        cy.url().should('contain', 'profile');
        cy.get(`.main-header`).should('have.text', "Profile")
    });


    it.only('Wrong User Login Scenario', () => {
        cy.get('#userName').type('test');
        cy.get('#password').type('Test1234-');
        cy.get('#login').click();
        cy.url().should('not.contain', 'profile');
        cy.get(`#name`).should('have.text', "Invalid username or password!");
        cy.get(`div[class=main-header]`).should('have.text', "Login");
    });


});