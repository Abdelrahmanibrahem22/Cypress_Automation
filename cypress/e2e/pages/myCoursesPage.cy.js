/// <reference types="cypress" />
require('cypress-xpath');

import myCoursesSelectors, { certificatePopUp } from '../selectors/myCoursesSelectors.cy.js';
import MockData from '../../fixtures/mainData.json';

const apiUrl = Cypress.env('apiUrl')
let enrolledCourses;
let numberOfLessons;
let data=MockData["CoursesMockData"] 
export class MyCourses{
clickViewAll(){
cy.get(myCoursesSelectors.viewAllCoursesButton).click();

}
noCourseFound(){
  cy.get(myCoursesSelectors.icon).should("be.visible");
  cy.get(myCoursesSelectors.emptyCoursesMessageone).should("contain.text","أنت غير مشترك في أي دورة حالياً");
  cy.xpath(myCoursesSelectors.emptyCoursesMessage)
  .should("contain.text","يمكنك تصفح الدورات والالتحاق بالدورة التي تود الاشتراك بها");
}
checkCountOfCoursesEnrolled(){
  cy.get(myCoursesSelectors.course)
  .should("be.visible")
  .then((courseLength)=>{
      expect(courseLength.length).equal(1)

  });
}
checkNavigateToAllCoursesPage(){
  cy.get(myCoursesSelectors.allcoursespage).should("contain.text","الدورات التعليمية");
}
checkNumberOfMyEnrolledCouses(){
  cy.getMyCourses().then((res)=>{
    enrolledCourses=res.response.length;
    if(enrolledCourses == 0 ){
        mycoursespage.noCourseFound();
        mycoursespage.clickViewAll();
        mycoursespage.checkNavigateToAllCoursesPage();
    }else
    {
cy.get(myCoursesSelectors.enrolledCourses).children().then((enrolledC)=>{
expect(enrolledC.length).equals(enrolledCourses)
    
}); 
    }
});
}
clickContunieLearning(){
  cy.get(myCoursesSelectors.contunielearning).click();
}
clickCompeleteLesson(){
  cy.get(myCoursesSelectors.compeletelesson).click();
}
VerifyCertificatePopUp(){
  cy.get(myCoursesSelectors.certificatePopUpIcon).should("be.visible");
  cy.get(myCoursesSelectors.certificatePopUp).should("be.visible")
  .should("contain.text","مبارك اتمامك الدورة!لقد قمت بإنهاء الدورة بنجاح ... نشكرك على مثابرتك واجتهادكعرض الشهادةنسخ رابط الشهادة");
  
}
viewCerificate(){
  cy.get(myCoursesSelectors.viewcCertificateButton).click();
 
}
verifyCopyCertifcateLink(){
  cy.get(myCoursesSelectors.copyCertificateLink).click();
  cy.get(myCoursesSelectors.tostCopyLink).should("be.visible");
  cy.get(myCoursesSelectors.closeIcon).click();
  cy.get(myCoursesSelectors.certificatePopUp).should("be.visible");

}
compelteCourseAndVerifyCertificate(){
  cy.getCourseCurriculm().then((res)=>{
    numberOfLessons=res.response["numOfLessons"];
   for(let i =0; i<numberOfLessons;i++){
    this.clickCompeleteLesson();
   }
   this.VerifyCertificatePopUp();
   this.verifyCopyCertifcateLink();
   this.viewCerificate();
});    
}

returnEmptyCourses(){

    cy.intercept('GET', 'https://backend.majaalis-testing.com/api/courses/learner/courses?page=0&size=12&sort=id,DESC', {
        statusCode: 200,
        body: [],
      }).as('emptyCourses');
      return('@emptyCourses');
}

/*
    async getEnrolledCourses() {
        let response = await fetch(
          'https://backend.majaalis-testing.com/api/courses/learner/courses?page=0&size=12&sort=id,DESC',
          {
            method: "GET",
            headers: {
              accept: "application/json",
              'x-tenant-id': 'testautomation',
              Authorization:`Bearer ${Cypress.env('token')}`,

            },
          }
        );
         return await response.json();
        
      }
     
*/
}