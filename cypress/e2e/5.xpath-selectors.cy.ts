describe("Locators", ()=>{
    beforeEach(()=>{
        cy.visit('/classattr');
    });

    it('How to find element by its text', ()=>{
        cy.xpath(`//*[text()="Correct variant is"]`).should(
            'contain.text', 
            'Correct');
    });

    it('Find the element by its attribute using xpath', ()=>{
        cy.xpath(`//pre[@class=' language-html']`).should(
            'contain.text', 
            'button');
    });

    it('Find by class (middle and spaces)', ()=>{
        cy.xpath(`//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-warning')]`)
        .should('have.css', 'background-color', 'rgb(255, 193, 7)')
    });

    it('Find button then click to show ALERT MESSAGE - example', ()=>{
        cy.xpath(`//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary')]`)
        .should('have.css', 'background-color', 'rgb(0, 123, 255)')
        .contains("Button")
        .click()

        //Getting the alert
        cy.on('window:alert', (alret)=>{
            //assertion
            expect(alret).to.contain('Primary button pressed');
        });
    });

});