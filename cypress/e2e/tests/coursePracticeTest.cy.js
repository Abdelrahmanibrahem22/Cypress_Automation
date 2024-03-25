/// <reference types="cypress" />
import { CoursePractice } from "../pages/CoursepracticePage.cy.js";
import logincmd from "../../support/login.cmd.js";

import studentlogin from "../../fixtures/mainData.json";
require('cypress-xpath');
const coursePractice = new CoursePractice();
let usernameValid = studentlogin["studentModule"]["studentlogin"]["usernameValid"]
let passwordValid = studentlogin["studentModule"]["studentlogin"]["passwordValid"]

describe("Course Practice  Tests ", () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.login(usernameValid, passwordValid);
        cy.visit("/home/profile?tab=my-courses")
    });
    /*  
    it("Validate learner submit True and false quiz with true answer ",() => {
       cy.getquiz().then((res) => {
            if (res.response[0]["learnerTotalAttempts"]+1 == res.response[0]["quizActivity"]["numberOfAttempts"]) {
                coursePractice.clickContunieLearning();
                coursePractice.solveChooseQuizWithTrue();
                coursePractice.validateSubmitChooseQuiz();
                coursePractice.ValidatePointsIfTrue();
                
            } else {
                coursePractice.clickContunieLearning();
                coursePractice.solveChooseQuizWithTrue();
                coursePractice.validateTryagianButton();
                coursePractice.validateSubmitChooseQuiz();
                coursePractice.ValidatePointsIfTrue();
            }
        });
    });
    it("Validate learner  submit True and false quiz with false answer ",() => {
       cy.getquiz().then((res) => {
            if (res.response[0]["learnerTotalAttempts"]+1 == res.response[0]["quizActivity"]["numberOfAttempts"]) {
                coursePractice.clickContunieLearning();
                coursePractice.solveChooseQuizWithFalse();
                coursePractice.validateSubmitChooseQuiz();
                coursePractice.ValidatePointsIfTrue();
                
            } else {
                coursePractice.clickContunieLearning();
                coursePractice.solveChooseQuizWithFalse();
                coursePractice.validateTryagianButton();
                coursePractice.validateSubmitChooseQuiz();
                coursePractice.ValidatePointsIfTrue();
            }
        });
    });
    
    it("Validate learner submit MCQ quiz with true answer ",() => {
       cy.getquiz().then((res) => {
            if (res.response[0]["learnerTotalAttempts"]+1 == res.response[0]["quizActivity"]["numberOfAttempts"]) {
                coursePractice.clickContunieLearning();
                coursePractice.solveMCQQuizWithTrue();
                coursePractice.validateSubmitChooseQuiz();
                coursePractice.ValidatePointsIfTrue();
                
            } else {
                coursePractice.clickContunieLearning();
                coursePractice.solveMCQQuizWithTrue();
                coursePractice.validateTryagianButton();
                coursePractice.validateSubmitChooseQuiz();
                coursePractice.ValidatePointsIfTrue();
            }
        });
    });
    it("Validate learner  submit MCQ quiz with false  answer ",() => {
       cy.getquiz().then((res) => {
            if (res.response[0]["learnerTotalAttempts"]+1 == res.response[0]["quizActivity"]["numberOfAttempts"]) {
                coursePractice.clickContunieLearning();
                coursePractice.solveMCQQuizWithFalse();
                coursePractice.validateSubmitChooseQuiz();
                coursePractice.ValidatePointsIfTrue();
                
            } else {
                coursePractice.clickContunieLearning();
                coursePractice.solveMCQQuizWithFalse();
                coursePractice.validateTryagianButton();
                coursePractice.validateSubmitChooseQuiz();
                coursePractice.ValidatePointsIfTrue();
            }
        });
    });
    */
    it.only("Validate learner submit short Answer quiz with true answer ", () => {
        cy.getquiz().then((res) => {

            if (res.response[0]["learnerTotalAttempts"]+1 == res.response[0]["quizActivity"]["numberOfAttempts"]) {
                coursePractice.clickContunieLearning();
                coursePractice.solveShortQuizWithTrue();
                coursePractice.validateSubmitChooseQuiz();
                coursePractice.ValidatePointsIfTrue();
                
            } else {
                coursePractice.clickContunieLearning();
                coursePractice.solveShortQuizWithTrue();
                coursePractice.validateTryagianButton();
                coursePractice.validateSubmitChooseQuiz();
                coursePractice.ValidatePointsIfTrue();
            }
        }); 
    }); 
    it("Validate learner  submit short Answer quiz with false  answer ", () => {
        cy.getquiz().then((res) => {

            if (res.response[0]["learnerTotalAttempts"]+1 == res.response[0]["quizActivity"]["numberOfAttempts"]) {
                coursePractice.clickContunieLearning();
                coursePractice.solveshortQuizWithFalse();
                coursePractice.validateSubmitChooseQuiz();
                coursePractice.ValidatePointsIfTrue();
                
            } else {
                coursePractice.clickContunieLearning();
                coursePractice.solveshortQuizWithFalse();
                coursePractice.validateTryagianButton();
                coursePractice.validateSubmitChooseQuiz();
                coursePractice.ValidatePointsIfTrue();
            }
        }); 
    });

});