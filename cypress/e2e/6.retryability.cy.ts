import { parseXML } from "cypress/types/jquery";

describe("Retry ability demo", () => {
  it("Visit with delay - LOAD DELAY", () => {
    cy.visit("/loaddelay", { timeout: 7000 });
  });

  it("Viti page with client delay - button", () => {
    cy.visit("/clientdelay");
    cy.get("#ajaxButton").click();
    cy.get(".bg-success", {timeout: 16000}).should(
      "have.text",
      "Data calculated on the client side."
    );
  });


  it('Progress bar scenarion', () => {
    cy.visit('/progressbar');
    cy.get('#startButton').click();
    cy.get('#progressBar', {timeout:30000}).should('have.text', "100%");
  });

  
  it("Progress bar scenarion", () => {
    cy.visit("/progressbar");
    cy.get("#startButton").click();
    cy.get("#progressBar", { timeout: 30000 }).should("have.text", "75%")
    .then(()=>{
        cy.get('#stopButton').click()
        cy.get('[id=result]').should('be.visible')
    });
  });


  it.only('Retry ability on our HTML - radnom NUMBER picker', () => {
    cy.visit('http://127.0.0.1:5500/Retry-Ability-Test/index.html')
    cy.get('[id="random-number"]').should(($div)=>{
        //All code inside here will retry unitl it passes or time out
        const y = parseInt($div.text());

        expect(y).to.be.gte(1).and.be.lte(10);
    
    })
  });
});
