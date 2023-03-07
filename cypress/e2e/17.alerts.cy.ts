describe.skip('Alerts - HerokuAPP', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("theInternetHeroku")}/javascript_alerts`);
    });

    it("JS Alert", () => {
      cy.contains("button", "Click for JS Alert").click();
      cy.on("window:alert", (message) => {
        expect(message).to.be.equal("I am a JS Alert");
      });

      cy.on("window:confirm", () => true);

      cy.get(`[id=result]`)
        .should("be.visible")
        .contains("You successfully clicked an alert");
    });

    it('JS Confirm(accept) - test', () => {
        cy.contains('button', 'Click for JS Confirm').click();
        cy.on('window:confirm', (message)=>{
            expect(message).to.be.equal('I am a JS Confirm')
        });

        cy.on('window:confirm', ()=>true)

        cy.get(`[id=result]`).should('be.visible')
        .contains("You clicked: Ok");
    });

    it('JS Confirm(cancel) - test', () => {
        cy.contains('button', 'Click for JS Confirm').click();
        cy.on('window:confirm', (message)=>{
            expect(message).to.be.equal('I am a JS Confirm')
        });

        cy.on('window:confirm', ()=>false)

        cy.get(`[id=result]`).should('be.visible')
        .contains("You clicked: Cancel");
    });

    it("JS Prompt", () => {
      cy.window().then((window) => {
        cy.stub(window, "prompt").returns(
          "This is a hello world from the prompt alert"
        );
        cy.contains("button", "Click for JS Prompt").click();
      });

      cy.get(`[id=result]`).should(
        "have.text",
        "You entered: This is a hello world from the prompt alert"
      );
    });
});


describe('Alerts', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/alerts`, {timeout: 20000});
    });

    it('Button alert - #1', () => {
        cy.on('window:alert', (message)=>{
            expect(message).to.be.equal('You clicked a button');
        });

        cy.on("window:confirm", () => true);
        cy.get(`button#alertButton.btn.btn-primary`).click()
    });


    it('Button alert after five seconds - #2 ', () => {
        cy.get(`button#timerAlertButton.btn.btn-primary`).click()
        cy.on('window:alert', (message)=>{
            expect(message).to.be.equal('This alert appeared after 5 seconds');
        });
        cy.on("window:confirm", () => true);
    });


    it('Button alert with confirm action - #3', () => {
        cy.get(`button#confirmButton.btn.btn-primary`).click();

        cy.on('window:alert', (message)=>{
            expect(message).to.be.equal('Do you confirm action?');
        });

        cy.on("window:confirm", () => true);
        cy.get(`#confirmResult`).should('have.text', "You selected Ok");
        
    });

    it.only('Button prompt with confirm action - #4', () => {

        let message = "Meris-Test"
        cy.window().then((window) => {
            cy.stub(window, "prompt").returns(message);
              cy.get(`button#promtButton`).should('be.visible').click();
         });
         cy.get(`#promptResult`).should('have.text', `You entered ${message}`);
    });

});


