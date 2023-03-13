class Main{

    private header:string = `div[class=main-header]`;
    private userNameID:string = `#userName-value`


    get headerElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.header);
    }

    get userNameIDElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.userNameID);
    }

}


export { Main };