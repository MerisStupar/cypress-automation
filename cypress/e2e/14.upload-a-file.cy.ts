describe.skip('Upload a file in the QA Demo site', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/upload-download`, {timeout: 20000});
    });


    it('Upload the file', () => {
        cy.get('input[id="uploadFile"]').attachFile('example.json');
        cy.get('p#uploadedFilePath').should('contain', "example.json");
    });

});


describe('Upload a file in the Heroku App', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("theInternetHeroku")}/upload`, {timeout: 20000});
    });


    
    it('Upload the file on Heroku App', () => {
       cy.get('input#file-upload').attachFile('example.json');
       cy.get('input#file-submit').click();
       cy.url().should('eql', "https://the-internet.herokuapp.com/upload");
       cy.get('h3').contains('File Uploaded!');
       cy.get(`div > div[id="uploaded-files"]`).should('contain', 'example.json');
    });
});