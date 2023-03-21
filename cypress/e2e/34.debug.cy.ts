describe('Basic about debug', () => {
    
    beforeEach(()=>{
        cy.visit(`click`);
    });

    it('Debug mode', ()=>{ 
        cy.get('#badButton').debug().click();
        cy.get('#badButton').should('have.class', "btn-success");
    });


    it.only('Pause option', () => {
        cy.pause();
        cy.get('#badButton').click();
        cy.pause();
        cy.get('#badButton').should('have.css', "background-color", "rgb(40, 167, 69)");
    });


});