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

  
  it.only("Progress bar scenarion", () => {
    cy.visit("/progressbar");
    cy.get("#startButton").click();
    cy.get("#progressBar", { timeout: 30000 }).should("have.text", "75%")
    .then(()=>{
        cy.get('#stopButton').click()
        cy.get('[id=result]').should('be.visible')
    });
  });
});
