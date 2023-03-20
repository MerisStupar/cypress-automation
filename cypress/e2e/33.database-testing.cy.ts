describe('MySQL Database testing', () => {
    
    it("Create a movie table", function () {
        cy.task(
          "queryDb",
          "CREATE TABLE movies(title VARCHAR(50) NOT NULL,genre VARCHAR(30) NOT NULL,director VARCHAR(60) NOT NULL,release_year INT NOT NULL,PRIMARY KEY(title));"
        );
      });

    

});