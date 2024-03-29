describe('Excel playground', () => {
    
    it('Read data from excel', () => {
        
        cy.parseXlsx("cypress/fixtures/excelData.xlsx").then((jsonData)=>{
            //Check what it is returning
            cy.log(jsonData);
            cy.log(jsonData[0].data);

            let data: [] = jsonData[0].data;
            // let dataLenght = data.length;


            data.forEach((row)=>{
                cy.log(row[0]);
                cy.log(row[1]);
            });

            data.forEach((row)=>{
                cy.writeFile('cypress/fixtures/excelData.json',{
                    username: row[0],
                    password: row[1],
                });
            })

        })

    });

});   