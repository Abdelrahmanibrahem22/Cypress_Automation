/// <reference types="cypress"/>
import allProgramsSelectors from "../selectors/allProramsSelectors.cy.js"
import MockData from '../../fixtures/mainData.json';
require('cypress-xpath');
let data=MockData["ActiveProgram"];
let name;
const apiUrl = Cypress.env('apiUrl')
export class AllPrograms{

navigateToAllCoursesPage(){
    cy.xpath(allProgramsSelectors.allProgramsButton).click();
}

/*async getAllActivePrograms() {
    let response = await fetch(
      `${apiUrl}/programs/published?page=0&size=12&sort=id,DESC`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          'x-tenant-id': 'testone',
          Authorization:`Bearer ${Cypress.env('token')}`,

        },
      }
    );
     return await response.json();
    
  }
  */
  returnMockprogram(){
    cy.intercept('GET', `${apiUrl}/programs/published?page=0&size=12&sort=id,DESC`, {
        statusCode: 200,
        body: data,
      }).as('returnOneProgram');  
      return cy.wait('@returnOneProgram')
}
checkNumberOfAllPrograms(){

  cy.getAllPrograms().then((res)=>{
        cy.xpath(allProgramsSelectors.programsNumber).children().then((enrolledP)=>{
             if(res.response.length == 0){
            expect(enrolledP.length - 2).equals(res.response.length)
             }else
             {
                 expect(enrolledP.length).equals(res.response.length)
             }

          });   
  
 });    
}
ckeckEnrollInProgram(){

  cy.get(allProgramsSelectors.ProgramCard).click();
  cy.get(allProgramsSelectors.enrollInProgramButton).click();
  cy.get(allProgramsSelectors.alertuccessEnrollement)
  .should("be.visible")
  .should("contain.text","تم الالتحاق بالبرنامج بنجاح");
  cy.xpath(allProgramsSelectors.progressSection).should("be.visible");

}
checkMyprogram(){

  cy.visit("/home/profile?tab=my-programs");
  cy.getMyProgram().then((res)=>{
    name =res.response[0]["nameAr"]
    cy.get(allProgramsSelectors.programcard).invoke('text').then((text)=>{
      expect(text).contains(name)
    });
    
  });
  //cy.get(allProgramsSelectors.programcard).should("have.text","البرنامج الاول ")
  
}
}