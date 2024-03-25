/// <reference types="cypress"/>
require('cypress-xpath');
import myCertificatesSelectors from '../selectors/myCertificatesSelectors.cy.js';
import MockData from '../../fixtures/mainData.json';
let userid = MockData["studentModule"]["studentlogin"]["userId"]

export class MyCertifictaes{

    navigateToMyCertificates(){
        cy.xpath(myCertificatesSelectors.myCertificatesButton).click();
    }
    checkTitleSections(){
        cy.xpath(myCertificatesSelectors.cousesCertificates)
        .should("be.visible")
        .should("contain.text","شهادات الدورات")
        
        cy.xpath(myCertificatesSelectors.tracksCertificates)
        .should("be.visible")
        .should("contain.text","شهادات المسارات")

        cy.xpath(myCertificatesSelectors.programsCertificates)
        .should("be.visible")
        .should("contain.text","شهادات البرامج")
    }

    returnZeroCoursesCertificates(){

        cy.intercept('GET', `https://backend.majaalis-testing.com/api/v2/user-certificates/learner/${userid}`, {
            statusCode: 200,
            body: [],
          }).as('emptyCoursesCertificates');
          return('@emptyCoursesCertificates');
    }
    noCoursesCertificatesFound(){
        cy.xpath(myCertificatesSelectors.iconforcourses).should("be.visible");
        cy.xpath(myCertificatesSelectors.nocertificatesForCourses)
        .should("be.visible")
        .should("contain.text","لا يوجد أي شهادات حاليًا");
    }

    returnZeroTracksCertificates(){

        cy.intercept('GET', `https://backend.majaalis-testing.com/api/user-track-certificates/learner?learnerId=${userid}`, {
            statusCode: 200,
            body: [],
          }).as('emptyTracksCertificates');
          return('@emptyTracksCertificates');
    }
    noTracksCertificatesFound(){
        cy.xpath(myCertificatesSelectors.iconfortracks).should("be.visible");
        cy.xpath(myCertificatesSelectors.nocertificatesfoetracks)
        .should("be.visible")
        .should("contain.text","لا يوجد أي شهادات حاليًا");
    }
    returnZeroProgramsCertificates(){

        cy.intercept('GET', `https://backend.majaalis-testing.com/api/user-program-certificates/learner?learnerId=${userid}`, {
            statusCode: 200,
            body: [],
          }).as('emptyProgramsCertificates');
          return('@emptyProgramsCertificates');
    }
    noProgramsCertificatesFound(){
        cy.xpath(myCertificatesSelectors.iconforprograms).should("be.visible");
        cy.xpath(myCertificatesSelectors.nocertificatesforprograms)
        .should("be.visible")
        .should("contain.text","لا يوجد أي شهادات حاليًا");
    }
    async getAllCoursesCertificates() {
        let response = await fetch(
          `https://backend.majaalis-testing.com/api/v2/user-certificates/learner/${userid}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              'x-tenant-id': 'testautomation',
              Authorization:`Bearer ${Cypress.env('token')}`,
            },
          }
        );
         return await response.json();
        
      }
      async getAllTracksCertificates() {
        let response = await fetch(
          `https://backend.majaalis-testing.com/api/user-track-certificates/learner?learnerId=${userid}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              'x-tenant-id': 'testautomation',
              Referer:"https://testone.majaalis-testing.com/home/profile?tab=my-courses",
              Authorization:`Bearer ${Cypress.env('token')}`,
            },
          }
        );
         return await response.json();
        
      }
      async getAllProgramsCertificates() {
        let response = await fetch(
          `https://backend.majaalis-testing.com/api/user-program-certificates/learner?learnerId=${userid}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              'x-tenant-id': 'testautomation',
              Referer:"https://testone.majaalis-testing.com/home/profile?tab=my-courses",
              Authorization:`Bearer ${Cypress.env('token')}`,
            },
          }
        );
         return await response.json();
        
      }
}