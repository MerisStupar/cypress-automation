let externalVariable: string = "test";

describe('Basic about variables in cypress', () => {
    
    beforeEach(()=>{
        cy.visit(`dynamicid`);  
    });


    it('Find by text', function() {
        cy.contains('button', 'Button with Dynamic ID')
        .invoke('text').then((text)=>{
            externalVariable = text;
            cy.wrap(externalVariable).as('textFromContains');
            cy.log(text);
        });
        cy.get('@textFromContains').then((text)=>{
            cy.log('This is the contains text outside of closure: ' + text);
        });
    });


    it('Sharing context by Alias', function() {
      externalVariable = this.textFromContains;
      cy.log(externalVariable);
    });



});