/// <reference types="cypress"/>
//import { loginPage } from "../pages/loginPage.cy.js";
import logincmd from "../../support/login.cmd.js";
import myProgramCmd from "../../support/mrProgramCmd.js"
import {MyPrograms} from "../pages/myProgamsPage.cy.js";
import myProgramsSelectors from "../selectors/myProgramsSelectors.cy.js";
import MockData from '../../fixtures/mainData.json';
require('cypress-xpath');
let enrolledPrograms;
let usernameValid = MockData["studentModule"]["studentlogin"]["usernameValid"]
let passwordValid = MockData["studentModule"]["studentlogin"]["passwordValid"]
//const loginpage = new loginPage();
const myprograms = new MyPrograms();

describe("My Programs Test Cases",()=>{

    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
       
          cy.login(usernameValid,passwordValid);
          cy.visit("/home/profile?tab=my-programs")

    });
    it("Validate my program page when no programs enrolled ", () => {
        cy.wait(myprograms.returnEmptyPrograms());
        myprograms.navigateToMyPrograms();
        myprograms.noProgramsFound();
     
    });
   
    it.only("Validate the button view all programs redirect to all programs page",()=>{
        
        cy.wait(myprograms.returnEmptyPrograms());
        myprograms.clickViewAll();
        myprograms.checkAllprogramsPage();

});

it("Validate my programs page validate the enrolled programs number ",() => {

   myprograms.checkNumberOfMyEnrolledProgram();
   
});


});