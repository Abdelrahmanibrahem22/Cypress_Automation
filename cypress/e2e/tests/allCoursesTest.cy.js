/// <reference types="cypress" />
import { AllCourses } from "../pages/allCoursesPage.cy.js";
import allCoursesSelectors from "../selectors/allCoursesSelectors.cy.js";
import logincmd from "../../support/login.cmd.js";
import allCoursesCmd from "../../support/allCoursesCmd.js";
import studentlogin from "../../fixtures/mainData.json";
require('cypress-xpath');
const allCourses=new AllCourses();
let allc=[];
let usernameValid = studentlogin["studentModule"]["studentlogin"]["usernameValid"]
let passwordValid = studentlogin["studentModule"]["studentlogin"]["passwordValid"]

describe("All Courses Page Tests ",()=>{
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          cy.login(usernameValid,passwordValid);
          cy.visit("/home/all-courses")
        
    });
    
    it("Validate all coursee page validdate the all Courses number ",() => {
       cy.getAllCourses().then((res)=>{
        cy.xpath(allCoursesSelectors.coursesNumber).children().then((enrolledC)=>{
            expect(enrolledC.length).equals(res.response[1])

       });
       
       
    });
   
    });

    it("Validate learner can enroll in course ",() => {
        allCourses.ckeckEnrollInCourse();
        allCourses.checkEnrolledCourseInMyCourses();
    });

});