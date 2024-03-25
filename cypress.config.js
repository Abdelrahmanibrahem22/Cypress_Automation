/// <reference types="cypress"/>

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory: 15,
  defaultCommandTimeout: 15000,
  viewportHeight: 768,
  viewportWidth: 1400,
  env: {
    apiUrl: "https://backend.majaalis-testing.com/api",
  },
  compilerOptions: {

    
    types: ["cypress", "cypress-file-upload"],
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://testautomation.majaalis-testing.com",
     experimentalStudio: true,
    testIsolation: true,
  },
});
