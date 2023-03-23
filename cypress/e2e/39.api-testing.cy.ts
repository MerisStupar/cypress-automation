describe('Basic API test example', () => {
    

    it('GET Request', () => {
        
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
            cy.log('Response: ', response);
        })

    });

    it('Post a new resource - POST METHOD', () => {
        
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {

            title: 'Title #101',
            body: 'Post #101',
            userId: 101
        }).then((respone)=>{
            cy.log('Response: ', respone);
            //Asserting the response from the POST request
            expect(respone.status).to.be.eq(201);
            expect(respone.statusText).to.be.equal('Created');
            expect(respone.body.title).to.be.equal('Title #101');
        });
    });

    it.only('Update a new resource - PUT METHOD', ()=>{

        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {

            id: 1,
            title: "Test - PUT",
            body: "Test - BODY",
            userId: 101

        })
        .then((response)=>{
            cy.log('Response: ', response);
            expect(response.status).to.be.equal(200);
        });


    });




});