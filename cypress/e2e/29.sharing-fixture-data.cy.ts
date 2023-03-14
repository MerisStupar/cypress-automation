import {testData} from './model'

describe('Sharing fixture', () => {
    
    beforeEach(function() {
        cy.fixture('jsonExample').as('testData')
    });

    it('Accesing the shared fixture - #1', function() {
        cy.get<testData>('@testData').then((testData)=>{
            cy.log('Accesint the test data property: ',testData.property1);
        });
    });

    it('Accesing the shared fixture - #2', function() {
        cy.get<testData>('@testData').then((testData)=>{
            cy.log('Accesint the test data property: ',testData.property2);
        });
    });
});