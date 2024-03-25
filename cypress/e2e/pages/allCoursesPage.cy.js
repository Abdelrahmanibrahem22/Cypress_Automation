/// <reference types="cypress"/>
import allCoursesSelectors from "../selectors/allCoursesSelectors.cy.js"
import MockData from '../../fixtures/mainData.json';
import myCoursesCmd from"../../support/myCoursesCmd.js"
require('cypress-xpath');
let data=MockData["ActiveCourse"] 
let name;
const apiUrl = Cypress.env('apiUrl')
export class AllCourses{
  
  navigateToAllCoursesPage(){
    cy.xpath(allCoursesSelectors.allCousesButton).click();
  }
  /*
  async getAllActiveCourses() {

    let response = await fetch(
      `${apiUrl}/courses/get/active-courses?page=0&size=12&learner_id=5&sort=id,DESC`,
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
  returnMockCourses(){
    cy.intercept('GET', `${apiUrl}/courses/get/active-courses?page=0&size=12&learner_id=5&sort=id,DESC`, {
        statusCode: 200,
        body: data,
      }).as('returnOneCourse'); 
      return cy.wait('@returnOneCourse')
}
checkNumberOfCourses(){
  cy.xpath(allCoursesSelectors.coursesNumber).children().then((enrolledC)=>{
    expect(enrolledC.length).equals(allc[0].length)
   
}); 
}
ckeckEnrollInCourse(){

    cy.xpath(allCoursesSelectors.StartLearningButton).click();
    cy.get(allCoursesSelectors.alertuccessEnrollement)
    .should("be.visible")
    .should("contain.text","تم الالتحاق بالدورة بنجاح");
    cy.xpath(allCoursesSelectors.contentSection).should("be.visible");

}
checkEnrolledCourseInMyCourses(){
  cy.visit("/home/profile?tab=my-courses");
  cy.getMyCourses().then((res)=>{
    name =res.response[0]["name"]
    cy.get(allCoursesSelectors.coursename).invoke('text').then((text)=>{
      expect(text).equals(name)
    });
  });
    //cy.get(allCoursesSelectors.coursename).should(name)
}
}