describe('Origin demo example', () => {
    
    it('Testing a fake login example', () => {
        
        cy.visit('https://mocklab-demo.herokuapp.com/login');

        cy.get(`div.demo-box a`).click();        

        cy.origin('https://oauth.mocklab.io/oauth', ()=>{
            cy.get(`[name="email"]`).type("user@test.com").should('be.visible');
            cy.get(`[name="password"]`).type("password").should('be.visible');
            cy.get(`#login-submit`).click();
        });

       cy.get("h1 strong").should("have.text", "user@test.com");

    });

    //NOTE NE RADI SITE KAKO TREBA IZ TOG RAZLOGA PADA TEST!
});