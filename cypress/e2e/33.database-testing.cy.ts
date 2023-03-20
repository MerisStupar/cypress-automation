import { result } from "cypress/types/lodash";

describe('MySQL Database testing', () => {
    
    it("Create a movie table", function () {
        cy.task(
          "queryDb",
          "CREATE TABLE movies(title VARCHAR(50) NOT NULL,genre VARCHAR(30) NOT NULL,director VARCHAR(60) NOT NULL,release_year INT NOT NULL,PRIMARY KEY(title));"
        );
      });

    
      it("Inserting into table MOVIE", () => {
        cy.task(
          "queryDb",
          `INSERT INTO movies VALUES
          ("Joker", "Psycholohical Thriller", "Todd Phillips", 2019),
          ("Peaky Blinders", "Series", "Todd Phillips", 2015)`
        ).then((result: any) => {
          expect(result.affectedRows).to.equal(2);
          expect(result.message).to.be.equal(
            "&Records: 2  Dupliscates: 0  Warnings: 0"
          );
        });
      });

      it.only('Select all movies', () => {
        
        cy.task('queryDb', `SELECT * FROM movies; `).then((result: any)=>{
          cy.log("First row validation: ").then(()=>{
              expect(result[0].title).to.be.equal("Joker");
              expect(result[0].genre).to.be.equal("Psycholohical Thriller");
              expect(result[0].director).to.be.equal("Todd Phillips");
              expect(result[0].release_year).to.be.eql(2019)
          });
          cy.log("Second row validation: ").then(()=>{
            expect(result[1].title).to.be.equal("Peaky Blinders");
            expect(result[1].genre).to.be.equal("Series");
            expect(result[1].director).to.be.equal("Todd Phillips");
            expect(result[1].release_year).to.be.eql(2015);
        });
        });


      });
    

});