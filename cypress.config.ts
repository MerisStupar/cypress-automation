import { defineConfig } from "cypress";
//Verify download import
const { verifyDownloadTasks } = require('cy-verify-downloads');

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
    //Verify download import
    on('task', verifyDownloadTasks);
    //----------------------------
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
});
