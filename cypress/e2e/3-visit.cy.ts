describe('template spec', () => {

    beforeEach(()=>{
        cy.visit('/textinput');
    })

    it('Visit explanation text input', () => {
        cy.url().then((url)=>{
            cy.log(`Printing the URL: ${url}`)
        })
    });

  });