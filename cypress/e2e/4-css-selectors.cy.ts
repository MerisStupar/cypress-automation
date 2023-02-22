
describe("Locators", ()=>{
    beforeEach(()=>{
        cy.visit('/dynamicid');
    });

    it('Cy.Contains - example', ()=>{
        cy.contains("Button with Dynamic ID")
        .should('have.text', "Button with Dynamic ID");
    });

    it('Cy.get + cy.find - example', ()=>{
        cy.get('div').find('button')
        .should('have.text', "Button with Dynamic ID");
    });

    it('CSS selector using an - ATTRIBUTE', ()=>{
        cy.get(`button[class="btn btn-primary"]`)
        .should('have.text', "Button with Dynamic ID");
    });

    it('CSS selector using a - CLASS', ()=>{
        cy.get(`.btn-primary`)
        .should('have.text', "Button with Dynamic ID");
    });
});