import { defineConfig } from "cypress";
//Verify download import
const { verifyDownloadTasks } = require('cy-verify-downloads');

//Excel requrrements
const xlsx = require("node-xlsx").default;
const fs = require("fs"); //For file
const path = require("path"); //for file path


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
    //------------------


    //For the mochaawsome reporter
    require('cypress-mochawesome-reporter/plugin')(on);
    //--------------------------------------------
    },
    env: {
      demoVar: "Hello from the Cypress.Config.Ts",
      demoQA: "https://demoqa.com",
      theInternetHeroku: "https://the-internet.herokuapp.com",
      //https://www.globalsqa.com/angularjs-protractor-practice-site/
      angular: "https://www.globalsqa.com"
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
  retries:{
    runMode: 2,
    openMode: 1,
  },
  video: false,
  
});
