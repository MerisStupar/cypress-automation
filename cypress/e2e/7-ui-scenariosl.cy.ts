describe('Click Challange', () => {
   
    beforeEach(()=>{
        cy.visit('/click');
    });

    it("Class assertion", () => {
        cy.get("[id=badButton]").click()
        .should('have.class', 'btn-success');
    });

    it("Background check assertion", () => {
        cy.get("[id=badButton]").click()
        .should('have.css', 'background-color', 'rgb(40, 167, 69)')
    });
});

//Implemented from this link https://github.com/dmtrKovalenko/cypress-real-events
describe('Hover challange', () => {
   
    beforeEach(()=>{
        cy.visit('/mouseover');
    });

    it('Hover with cypress workaround', () => {
        cy.get('.text-primary').realHover();
    });
   
});