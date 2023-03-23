describe('Basic API test example', () => {
    

    it('GET Request', () => {
        
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
            cy.log('Response: ', response);
        })

    });

    it('Post a new resource', () => {
        
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: 'Title #101',
            body: 'Post #101',
            userId: 101
        }).then((respone)=>{
            cy.log('Response: ', respone);
            expect(respone.status).to.be.eq(201);
            expect(respone.statusText).to.be.equal('Created');
        });


    });

});