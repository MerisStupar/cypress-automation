describe('Accordian', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/accordian`, {timeout: 20000});
    });

    it('Default Accordion validation example', () => {
        cy.get(`#section2Heading`).click();
        //Cheking if the first desc was hidden correctly.
        cy.get(`#section1Heading`).next().should('have.css', 'display', 'none'); 
        //Cheking if the second desc was diplayed
        cy.get(`#section2Heading`).next().should('have.css', 'display', 'block')
        .and('have.class', 'show'); 
    });


});