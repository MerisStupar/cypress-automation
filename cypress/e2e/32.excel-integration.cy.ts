describe('Excel playground', () => {
    
    it('Read data from excel', () => {
        
        cy.parseXlsx("cypress/fixtures/excelData.xlsx").then((jsonData)=>{
            //Check what it is returning
            cy.log(jsonData);
        })

    });

});