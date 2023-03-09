describe('Autocomplete explanation', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/auto-complete`, {timeout: 20000});
    });


    it('Autocomplete demo using Purple', () => {
        //-IDautocomplet --react-select-2-option-0
        cy.get(`.auto-complete__value-container`).first().type('P');
        cy.contains('#react-select-2-option-0', "Purple").click()
        cy.get('.auto-complete__value-container--is-multi').should('have.text', 'Purple');
    });

});