/// <reference types="cypress"/>
import logincmd from "../../support/login.cmd.js";
import myCoursesCmd from "../../support/myCoursesCmd.js"
import {MyCourses} from "../pages/myCoursesPage.cy.js";
import MockData from '../../fixtures/mainData.json';
import myCoursesSelectorsCy from "../selectors/myCoursesSelectors.cy.js";
require('cypress-xpath');
let numberOfEnrolledCourses=[];
let enrolledCourses=[];
let numberOfLessons;
let usernameValid = MockData["studentModule"]["studentlogin"]["usernameValid"]
let passwordValid = MockData["studentModule"]["studentlogin"]["passwordValid"]

const mycoursespage = new MyCourses();

describe("My Courses Test Cases",()=>{

    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          cy.login(usernameValid,passwordValid);
          cy.visit("/home/profile?tab=my-courses")
         
    });
    
it("Validate my coursee page validate the enrolled Courses number ",() => {

mycoursespage.checkNumberOfMyEnrolledCouses();

});
it("Validate pop up  Certificate of coursee when finish it  ",() => {

    mycoursespage.clickContunieLearning();
    mycoursespage.compelteCourseAndVerifyCertificate();

});

});