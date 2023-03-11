import {LoginPage} from '../../cypress/pages/Login'

describe('Basics', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/login`, {timeout: 20000});
    }); 


    it('Sucess Login Scenario ', () => {
        LoginPage.submitLogin('test', 'Test1234*');
        cy.url().should('contain', 'profile');
        cy.get(`.main-header`).should('have.text', "Profile")
    });


    it('Wrong User Login Scenario', () => {
        LoginPage.submitLogin('test', '222222220220020202020202020');
        cy.url().should('not.contain', 'profile');
        cy.wait(2000)
        cy.get(`#name`).should('have.text', "Invalid username or password!");
        cy.get(`div[class=main-header]`).should('have.text', "Login");
    });


});