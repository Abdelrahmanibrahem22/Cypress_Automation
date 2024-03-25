/// <reference types="cypress" />
import { loginPage } from "../pages/loginPage.cy.js";
import studentlogin from "../../fixtures/mainData.json";
require('cypress-xpath');

const loginpage = new loginPage();
let usernameValid = studentlogin["studentModule"]["studentlogin"]["usernameValid"]
let passwordValid = studentlogin["studentModule"]["studentlogin"]["passwordValid"]
let usernameInvalid = studentlogin["studentModule"]["studentlogin"]["usernameInvalid"]
let passwordInvalid =studentlogin["studentModule"]["studentlogin"]["passwordInvalid"]


describe("Login Test Cases ",()=>{
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          cy.visit('/login')

    });
    it("Login With Valid Data", () => {
        loginpage.loginUser(usernameValid,passwordValid)
        loginpage.successfullyLogin();
      }); 
       
      it("Login With Invalid Data", () => {
          loginpage.loginUser(usernameInvalid,passwordInvalid)
          loginpage.alertErrorMessage();     
        }); 
        it("Login With Empty Data", () => {
          loginpage.loginUser("{backspace}","{backspace}")
          loginpage.alertEmptyEmail();
          loginpage.alertEmptyPassword();
         
        }); 
     
});