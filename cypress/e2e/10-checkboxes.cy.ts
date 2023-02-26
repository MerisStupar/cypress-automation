describe.only('Demo QA', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/checkbox`, {timeout: 45000});
    });

    it('Checkbox scenario', () => {
        cy.get(`input[type="checkbox"]`).click({force: true});
        cy.get('#result').should('have.text', "You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile");
    });

});

describe('Demo QA', () => {
    


});