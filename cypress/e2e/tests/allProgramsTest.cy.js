/// <reference types="cypress" />
import { AllPrograms } from "../pages/allProgramsPage.cy.js";
import allProgramsSelectors from "../selectors/allProramsSelectors.cy.js";
import logincmd from "../../support/login.cmd.js";
import allProgCmd from "../../support/allProgCmd.js";
import myProgramCmd from "../../support/mrProgramCmd.js"
import studentlogin from "../../fixtures/mainData.json";
require('cypress-xpath');
const allPrograms=new AllPrograms();
let allP=[];
let usernameValid = studentlogin["studentModule"]["studentlogin"]["usernameValid"]
let passwordValid = studentlogin["studentModule"]["studentlogin"]["passwordValid"]
    
describe("All Programs Page Tests ",()=>{
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          cy.login(usernameValid,passwordValid);    
          cy.visit("/home/all-programs")
    });
    it.only("Validate all Programs page validdate the all Programs number ",() => {

        allPrograms.checkNumberOfAllPrograms();
      /* cy.getAllPrograms().then((res)=>{
           cy.xpath(allProgramsSelectors.programsNumber).children().then((enrolledP)=>{
                if(res.response.length == 0){
               expect(enrolledP.length - 2).equals(res.response.length)
                }else
                {
                    expect(enrolledP.length).equals(res.response.length)
                }
 
             });   
       }); */
 
        });
      
    it("Validate learner can enroll in Programs ",() => {
        
        allPrograms.ckeckEnrollInProgram();
        allPrograms.checkMyprogram();
    });
     
});