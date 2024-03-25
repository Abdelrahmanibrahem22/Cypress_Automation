/// <reference types="cypress" />
require('cypress-xpath');

import myProgramsSelectors from '../selectors/myProgramsSelectors.cy.js';
import MockData from '../../fixtures/mainData.json';

const apiUrl = Cypress.env('apiUrl')
let enrolledPrograms;
let data=MockData["ProgramsMockData"] 
let userid = MockData["studentModule"]["studentlogin"]["userId"]
export class MyPrograms{

navigateToMyPrograms(){
    cy.get(myProgramsSelectors.myProgramsButton).click();
}    
clickViewAll(){
cy.get(myProgramsSelectors.viewAllProgramsButton).click();

}
noProgramsFound(){
  cy.get(myProgramsSelectors.icon).should("be.visible");
  cy.get(myProgramsSelectors.noprogramsMessage).should("contain.text","أنت غير مشترك في أي برنامج حالياً");
  cy.xpath(myProgramsSelectors.noprogramsMessageTwo)
  .should("contain.text","يمكنك تصفح البرامج والالتحاق بالبرنامج الذي تود الاشتراك به");
}

checkAllprogramsPage(){
  cy.get(myProgramsSelectors.allProgramsPage).should("contain.text","البرامج التعليمية");
}
checkNumberOfMyEnrolledProgram(){
  cy.getMyProgram().then((res)=>{
    enrolledPrograms=res.response.length;
    if(enrolledPrograms == 0 ){
        this.noProgramsFound();
        this.clickViewAll();
        this.checkAllprogramsPage();
    }else
    {
     cy.xpath(myProgramsSelectors.enrolledPrograms).children().then((enrolledP)=>{
       expect(enrolledP.length).equals(enrolledPrograms)

}); 
    }
});
}
returnEmptyPrograms(){

    cy.intercept('GET', `https://backend.majaalis-testing.com/api/programs/learner?learnerId=${userid}`, {
        statusCode: 200,
        body: [],
      }).as('emptyPrograms');
      return('@emptyPrograms');
}

}