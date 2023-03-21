describe('Docket Post Test', () => {
    

    it('Random data - with FAKER', () => {
        cy.task('freshUser').then((object)=>{
            cy.log('#1- Data from FAKER: ', object);            
        });
    });

    it('Random data - with FAKER', () => {
        cy.task('freshUser').then((object)=>{
            cy.log('#2 - Data from FAKER: ', object);            
        });
    });

    it('Random data - with FAKER', () => {
        cy.task('freshUser').then((object)=>{
            cy.log('#3- Data from FAKER: ', object);            
        });
    });


});