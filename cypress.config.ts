import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      demoVar: "Hello from the Cypress.Config.Ts",
      demoQA: "https://demoqa.com/",
      theInternetHeroku: "https://the-internet.herokuapp.com/",
      //https://www.globalsqa.com/angularjs-protractor-practice-site/
      angular: "https://www.globalsqa.com"


    }
  },
  pageLoadTimeout: 3000,
  viewportHeight: 1000,
  viewportWidth: 1400
});
