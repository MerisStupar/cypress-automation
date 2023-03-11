class Login{

    private username:string = '#userName';
    private password:string = '#password';
    private loginBtn:string = '#login';
    private invalidLoginMessage:string = "#name";



    submitLogin(username:string, password:string):void{
        cy.get(this.username).type(username);
        cy.get(this.password).type(password);
        cy.get(this.loginBtn).click();
    }

}





export const LoginPage = new Login();