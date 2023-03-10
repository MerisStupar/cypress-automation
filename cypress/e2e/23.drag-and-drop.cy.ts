describe('Menu Describe', () => {
    
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/droppable`, {timeout:20000});
    });

    it('Drag and Drop Demo', () => {
        
        cy.get(`#draggable`).drag(`#droppable`, {force: true})

    });


});