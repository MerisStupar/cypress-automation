import {User} from './model'

describe('Array of Objects - Users', () => {
    
    it('Getting user information based on my fixture', () => {
        cy.fixture<{users: User[]}>('example.json').its('users')
        .then((users)=>{

            users.forEach(user=>{

                cy.visit(`${Cypress.env("demoQA")}/login`, {timeout: 20000});
                cy.login(user.username, user.password);

                if(user.valid == true){
                    cy.url().should('contain', 'profile');
                }else{
                    cy.url().should('contain', 'login');
                }

                cy.clearCookies();
                cy.clearAllLocalStorage();
            })
        });
    });

});