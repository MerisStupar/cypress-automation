import { result } from "cypress/types/lodash";

describe('MySQL Database testing', () => {
    
    it("Create a movie table", function () {
        cy.task(
          "queryDb",
          "CREATE TABLE movies(title VARCHAR(50) NOT NULL,genre VARCHAR(30) NOT NULL,director VARCHAR(60) NOT NULL,release_year INT NOT NULL,PRIMARY KEY(title));"
        );
      });

    
      it.only('Inserting into table MOVIE', () => {
        
        cy.task(
          "queryDb",
          `INSERT INTO movies VALUES
          ("Joker", "Psycholohical Thriller", "Todd Phillips", 2019),
          ("Peaky Blinders", "Series", "Todd Phillips", 2015)`
        ).then((result: any)=>{
          expect(result.affectedRows).to.equal(2);
          expect(result.message).to.be.equal("&Records: 2  Duplicates: 0  Warnings: 0");
        })
      });
    

});