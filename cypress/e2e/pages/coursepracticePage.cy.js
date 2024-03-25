/// <reference types="cypress"/>
import coursepracticeSelectors from "../selectors/CoursepracticeSelectors.cy.js";
import quizCmd from "../../support/quizCmd.js"

export class CoursePractice{

    clickContunieLearning(){
        cy.get(coursepracticeSelectors.contunielearning).click();
      }

      solveChooseQuizWithTrue(){
        cy.get(coursepracticeSelectors.startQuiz).click();
        cy.get(coursepracticeSelectors.selectTrue).click();
        cy.get(coursepracticeSelectors.submitQuiz).click();

      }
      solveChooseQuizWithFalse(){
        cy.get(coursepracticeSelectors.startQuiz).click();
        cy.get(coursepracticeSelectors.selectFalse).click();
        cy.get(coursepracticeSelectors.submitQuiz).click();

      }
      ValidatePointsIfTrue(){
        cy.xpath(coursepracticeSelectors.points).should("be.visible")
        .should("contain.text","1 / 1")
      }
      ValidatePointsIfFalse(){
        cy.xpath(coursepracticeSelectors.points).should("be.visible")
        .should("contain.text","1 / 0")
      }
      validateSubmitChooseQuiz(){
        cy.get(coursepracticeSelectors.submitsuccessfullyToast)
        .should("be.visible")
        .should("have.text","تم إرسال الإجابات بنجاح");
        cy.get(coursepracticeSelectors.results).should("be.visible")
        .should("contain.text","النتائج");
        cy.get(coursepracticeSelectors.nextLessonButton).should("be.visible");
        cy.get(coursepracticeSelectors.showResult).click();
        cy.get(coursepracticeSelectors.theResult)
        .should("be.visible")
        .should("contain.text","الإجابة الصحيحة")
 
      }
      validateTryagianButton(){
        cy.get(coursepracticeSelectors.tryAgainButton).should("be.visible");
      }
      solveMCQQuizWithTrue(){
        cy.get(coursepracticeSelectors.startQuiz).click();
        cy.get(coursepracticeSelectors.selectCorrectchoose).click();
        cy.get(coursepracticeSelectors.submitQuiz).click();

      }
      solveMCQQuizWithFalse(){
        cy.get(coursepracticeSelectors.startQuiz).click();
        cy.get(coursepracticeSelectors.selectWrongChoose).click();
        cy.get(coursepracticeSelectors.submitQuiz).click();

      }
      solveShortQuizWithTrue(){
        cy.get(coursepracticeSelectors.startQuiz).click();
        cy.get(coursepracticeSelectors.textarea).type("True");
        cy.get(coursepracticeSelectors.submitQuiz).click();

      }
      solveshortQuizWithFalse(){
        cy.get(coursepracticeSelectors.startQuiz).click();
        cy.get(coursepracticeSelectors.textarea).type("False");
        cy.get(coursepracticeSelectors.submitQuiz).click();

      }

}