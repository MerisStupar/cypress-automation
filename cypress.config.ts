import { defineConfig } from "cypress";
//Verify download import
const { verifyDownloadTasks } = require('cy-verify-downloads');

//Excel requrrements
const xlsx = require("node-xlsx").default;
const fs = require("fs"); //For file
const path = require("path"); //for file path

//MySQL requirements
const mysql = require("mysql");

//Faker
const{faker} = require("@faker-js/faker");


export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
    //Verify download import
    on('task', verifyDownloadTasks);
    //----------------------------

     //Excel implementation
     on("task", {
      parseXlsx({ filePath }) {
        return new Promise((resolve, reject) => {
          try {
            const jsonData = xlsx.parse(fs.readFileSync(filePath));
            resolve(jsonData);
          } catch (e) {
            reject(e);
          }
        });
      },
    });
    //---------------------------------


    //MySQL Implementation & Faker
    on("task", {
      queryDb: (query) => {
        return queryTestDb(query, config);
      },
    });
    //----------------------------

    //Faker task
    on("task", {
      freshUser(){
        let user = {
          username: faker.name.firstName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          registeredAt: faker.date.past(),
          vehicle: faker.vehicle.vehicle()
        };
        return user;
      }
    })


    //For the mochaawsome reporter
    require('cypress-mochawesome-reporter/plugin')(on);
    //--------------------------------------------

    //DONENV
    require('dotenv').config();
    },
    env: {
      demoVar: "Hello from the Cypress.Config.Ts",
      demoQA: "https://demoqa.com",
      theInternetHeroku: "https://the-internet.herokuapp.com",
      //https://www.globalsqa.com/angularjs-protractor-practice-site/
      angular: "https://www.globalsqa.com",

      //Database 
      db:{
        host: "localhost",
        user: "root",
        password: "",
        database: "cypress_test"
      },

      //Working wiht sensitive data
      user: "test",
      password: ""
    
    },

  },
  pageLoadTimeout: 3000,
  viewportHeight: 1000,
  viewportWidth: 1400,
  //Mochaawsome Reporter
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Reporter of failed tests',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },


  //-Global for retries for tests
/*   retries:{
    runMode: 2,
    openMode: 1,
  },
  video: false, */
  projectId: "7tx8x6",
});


function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}