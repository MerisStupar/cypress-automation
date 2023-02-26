describe.skip('Click Challange', () => {
   
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
describe.skip('Hover challange', () => {
   
    beforeEach(()=>{
        cy.visit('/mouseover');
    });

    it('Hover with cypress workaround', () => {
        cy.get('.text-primary').realHover();
    });
   
});

describe('Dynamic table challange', () => {
   
    beforeEach(()=>{
        cy.visit('/dynamictable');
    });


    it('Chrome CPU Test - Dynamic table Example', () => {
        cy.get(`div[role="row"] span`).each(($cell) =>{
            if($cell.text().includes('Chrome')){
                cy.log(`I have found the ${$cell.text()} row !`);
                let chromeRowValues:string[] = [];
                chromeRowValues.push($cell.next().text());
                chromeRowValues.push($cell.next().next().text());
                chromeRowValues.push($cell.next().next().next().text());
                chromeRowValues.push($cell.next().next().next().next().text());
                cy.log("Chrome row values", chromeRowValues);

/*                 chromeRowValues.forEach((value)=>{
                    if(value.includes('%')){
                        cy.log(value);
                        cy.get(`p[class="bg-warning"]`).should('have.text', `Chrome CPU: ${value}`);
                    }
                }) */
            }
        });
    });


    it.only('Chrome CPU Test - Dynamic table Example  - FOR LOOP', () => {
        cy.get(`div[role="row"] span`).each(($cell) =>{
        
            if($cell.text().includes('Chrome')){
                cy.log(`I have found the ${$cell.text()} row !`);
                
                const chromeRowValues: string [] = [];

                for(let i=0; i<=4; i++){
                    const cellValue = $cell.nextAll().eq(i).text();  //.nextAll() - added to go to the limit of the for loop
                    if(cellValue){
                        chromeRowValues.push(cellValue);
                    } else{
                        cy.log(`Error: Could not find value for cell ${i} in Chrome row`)
                    }
                }
                cy.log("Chrome row values", chromeRowValues);

               chromeRowValues.forEach((value)=>{
                    if(value.includes('%')){
                        cy.log(value);
                        cy.get(`p[class="bg-warning"]`).should('have.text', `Chrome CPU: ${value}`);
                    }
                }) 
            }
        });
    });
   
});