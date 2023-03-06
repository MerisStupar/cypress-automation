describe.skip('IFrame example', () => {
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/nestedframes`, {timeout: 20000});
    });

    it('Simple and nested iframe', () => {
        cy.get('#frame1').then(function ($iframe) {
            const $body = $iframe.contents().find('body')
            cy.wrap($body).should('have.text', "Parent frame")
            cy.wrap($body).find('iframe').then(function($childIframe){
                const $childBody = $childIframe.contents().find('body');
                cy.wrap($childBody).find('p').should('have.text', "Child Iframe");
            })
        });
    });
});

describe('IFrame example', () => {
    beforeEach(()=>{
        cy.visit(`${Cypress.env("theInternetHeroku")}/iframe`, {timeout: 15000});
    });

    it('Simple and nested iframe', () => {
        cy.get(`#mce_0_ifr`).then(($iframe)=>{
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('p')
            .type("{selectAll}{del}Hello World! How are you?");
        });
        cy.get(`#mce_0_ifr`).then(($iframe)=>{
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('p').should('have.text', "Hello World! How are you?");
        });

        cy.get(`#mce_0_ifr`).then(($iframe)=>{
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('p').type("{selectAll}")
            
            //Bolding the input text
            cy.get(`.tox-toolbar__group:nth-of-type(3) span.tox-tbtn__icon-wrap:first-of-type`).eq(0)
            .click()
            cy.wrap($body).find('p').type("{esc}")


        });

      
       
    });
});