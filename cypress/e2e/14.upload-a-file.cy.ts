describe('Upload a file in the QA Demo site', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/upload-download`, {timeout: 20000});
    });


    it('Upload the file', () => {
        
    });

});