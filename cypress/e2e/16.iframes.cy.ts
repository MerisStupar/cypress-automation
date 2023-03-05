describe('IFrame example', () => {
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/nestedframes`);
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