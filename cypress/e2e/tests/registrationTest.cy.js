/// <reference types="cypress"/>
import {RegistrationPage} from "../pages/registrationPage.cy.js"
import registerdata from "../../fixtures/mainData.json"
require('cypress-xpath');

const registerPage = new RegistrationPage();
let name =registerdata["studentModule"]["studentregister"]["name"]
let passwordValid =registerdata["studentModule"]["studentregister"]["passwordValid"]
let passwordInvalid = registerdata["studentModule"]["studentregister"]["passwordInvalid"]
let invalidEmail= registerdata["studentModule"]["studentregister"]["invalidEmail"]
let phone,email;
describe("Registration Test Cases ",()=>{
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        cy.visit("/register");
        phone = `010${Math.random().toString().slice(2, 10)}`;
        email = `abdelrahman.ibrahem+${Math.random()
          .toString()
          .slice(2, 10)}@mobidevlabs.com`;
        
    });
    it("Register With Valid Data With Phone Number", () => {
        registerPage.registerWithPhone( name,email, phone, passwordValid,passwordValid)
        registerPage.successfullyRegister();
      });
      it("Register With Valid Data Without Phone Number", () => {
        registerPage.registerWithoutPhone( name,email, passwordValid, passwordValid);
        registerPage.successfullyRegister();
      });
    
      it("Register With Invalid Data", () => {
        registerPage.registerWithInvalidData(invalidEmail, passwordInvalid);
        registerPage.alertIvalidEmail();
        registerPage.alertInvalidPassword();
      });
      it("Register With Empty Data", () => {
        registerPage.registerWithEmptyData("{backspace}","{backspace}","{backspace}");
        registerPage.alertRegitserWithEmptyData();
      });
    
});

