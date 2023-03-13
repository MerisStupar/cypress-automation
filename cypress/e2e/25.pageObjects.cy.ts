import {LoginPage} from '../../cypress/pages/Login'

describe('Basics', () => {
    
    beforeEach(()=>{
       LoginPage.visit();
    }); 

    it('Sucess Login Scenario - #1 with Elements', () => {
        LoginPage.usernameElement.type('test');
        LoginPage.passwordElement.type('Test1234*');
        LoginPage.loginElement.click();
        cy.url().should('contain', 'profile');
        cy.get(`.main-header`).should('have.text', "Profile")
    });


    it('Sucess Login Scenario - #2 with Functions', () => {
        LoginPage.submitLogin('test', 'Test1234*');
        cy.url({timeout: 20000}).should('contain', 'profile');
        cy.get(`.main-header`).should('have.text', "Profile")
    });


    it('Wrong User Login Scenario', () => {
        LoginPage.submitLogin('test', 'WrongPassword');
        cy.url().should('not.contain', 'profile');
        cy.wait(2000);
        LoginPage.invalidLoginMessageElement.should(
          "have.text",
          "Invalid username or password!"
        );
        cy.get(`div[class=main-header]`).should('have.text', "Login");
    });


});