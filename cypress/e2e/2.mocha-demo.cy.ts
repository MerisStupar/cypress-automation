describe('Mocha-Demo', () => {

  before(()=>{
    cy.log('Hello from the before hook');
  });

  after(()=>{
    cy.log('Hello from the before hook');
  });

  beforeEach(()=>{
    cy.log('Hello from the befor each hook');
  });

  afterEach(()=>{
    cy.log('Hello from the after each hook');
  });

  it('Testcase #1', () => {
    cy.log('Hello world');
  });

  it('Testcase #2', () => {
    cy.log('Hello world');
  });

  it('Testcase #3', () => {
    cy.log('Hello world');
  });

  it('Testcase #4', () => {
    cy.log('Hello world');
  });

});
