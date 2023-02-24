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