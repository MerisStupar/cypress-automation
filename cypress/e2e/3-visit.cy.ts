describe('template spec', () => {

    beforeEach(()=>{
        cy.visit('/textinput');
    })

    it('Visit explanation text input', () => {
        cy.url().then((url)=>{
            cy.log(`Printing the URL: ${url}`);
            expect(url).to.contains('/textinput');
        });
    });

    it('Title validation', ()=>{
        cy.title().then((title)=>{
            cy.log(title);
            expect(title).to.be.equal('Text Input');
        });
    });

    it('Input Challange', ()=>{
        cy.get('input#newButtonName')
    });

  });