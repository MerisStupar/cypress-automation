describe('Alerts', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("theInternetHeroku")}/javascript_alerts`);
    });

    it('JS Alert', () => {
        cy.contains('button', 'Click for JS Alert').click();
        cy.on('window:alert', (message)=>{
            expect(message).to.be.equal('I am a JS Alert')
        });

        cy.on('window:confirm', ()=>true)

        cy.get(`[id=result]`).should('be.visible')
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

    it('JS Prompt', () => {
        
    });




});