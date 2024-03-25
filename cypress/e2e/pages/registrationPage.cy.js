/// <reference types="cypress"/>
require('cypress-xpath');
import registrationSelectors from '../selectors/registrationSelectors.cy.js';

export class RegistrationPage{

    setName(name) {
        cy.get(registrationSelectors.name).type(name);
    }
    setEmail(email) {
        cy.get(registrationSelectors.usernameField).type(email);
    }

    setPhone(phone) {
        cy.get(registrationSelectors.contryFlag).click();
        cy.get(registrationSelectors.searchBox).type('مصر{enter}')
        cy.get(registrationSelectors.phone).type(phone);
    }
    setPassword(password) {
        cy.get(registrationSelectors.passwordField).type(password);
    }
    setConfirmationPassword(confirmationPassword){
        cy.get(registrationSelectors.confirmationPassword).type(confirmationPassword);
    }
    clickRegister(){
        cy.get(registrationSelectors.registerButton).click();
    }
    registerWithPhone(name,email,phone,password,confirmationPassword){

        this.setName(name);
        this.setEmail(email);
        this.setPhone(phone);
        this.setPassword(password);
        this.setConfirmationPassword(confirmationPassword);
        this.clickRegister();
    }
    registerWithoutPhone(name,email,password,confirmationPassword){

        this.setName(name);
        this.setEmail(email);
        this.setPassword(password);
        this.setConfirmationPassword(confirmationPassword);
        this.clickRegister();
    }
    registerWithInvalidData(email,password) {
        this.setEmail(email);
        this.setPassword(password);
        this.clickRegister();
      }
      registerWithEmptyData(name,email,password) {
        this.setEmail(name);
      this.setEmail(email);
       this.setPassword(password);
      this.clickRegister();
      }
    successfullyRegister(){
        cy.xpath(registrationSelectors.successRegister)
        .should("be.visible")
        .should("contain.text", "تفعيل البريد الإلكتروني");
    }
    alertIvalidEmail(){
        cy.get(registrationSelectors.alertInvalidEmail)
        .should("be.visible")
        .should("contain.text", "البريد الإلكتروني  غير صحيح");
    }
    alertInvalidPassword(){
        cy.get(registrationSelectors.alertInvalidpassword)
          .should("be.visible")
          .should("contain.text", "يجب أن  تتضمن كلمة المرور - في أقل تقدير -  8 أحرف، بها حرف كبير واحد على الأقل، وأحد الأرقام، وأحد الرموز ولا تحتوي على مسافات.");
    }
    alertRegitserWithEmptyData(){
        cy.get(registrationSelectors.alertEmptyName)
          .should("be.visible")
          .should("contain.text", "يجب إدخال  الاسم بالكامل");
        cy.get(registrationSelectors.alertEmptyEmail)
          .should("be.visible")
          .should("contain.text", "يجب إدخال  عنوان البريد الإلكتروني");
        cy.get(registrationSelectors.alertEmptyPassword)
          .should("be.visible")
          .should("contain.text", "يجب إدخال  كلمة المرور");
    }

}