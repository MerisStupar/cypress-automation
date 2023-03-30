describe('Hello-World', () => {
  it('passes', () => {
    cy.log('Hello world - test');
  });

  it.skip("Typescript Introduction", ()=>{
    let stringVarible:string = "9";
    let numberVariable:number = 0;
    let booleanVariable:boolean = true;
    let anyVariable: any = false;


    function addTwoNumbers(a:number, b:number):number{
      return a+b;
    }

    interface User{
      username: string;
      password: string;
    }

    function returningUserInformation(user:User):void{
      console.log('This is the user name' + user.username);
      console.log('This is the password' + user.password);
    }
  });


  it('Test environment variables', () => {
  
   cy.log(Cypress.env('test'));
  
   

  });
})