describe('Basics', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/login`, {timeout: 20000});
    }); 

    it('Sucess Login Scenario ', () => {
        cy.login('test', 'Test1234*');
        cy.url().should('contain', 'profile');
    });


    it('Wrong User Login Scenario', () => {
        cy.login('test', 'wrongpassword');
        cy.url().should('contain', 'login');
    });


});