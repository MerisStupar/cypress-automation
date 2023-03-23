describe('BookStore API Tests', () => {
    
    it('Creating a user', () => {
        const userId: string = '7d01de84-9527-4855-a10c-043a637178b3';
        cy.wrap(userId).as('userId');
    });


    it('Get an authorization token from the API account', ()=> {
        cy.request('POST', `${Cypress.env("demoQA")}/Account/v1/GenerateToken`);
    });
    
});