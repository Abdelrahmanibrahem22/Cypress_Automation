/// <reference types="cypress"/>
//import { loginPage } from "../pages/loginPage.cy.js";
import logincmd from "../../support/login.cmd.js";
import certificatesCmd from "../../support/certificatesCmd.js"
import {MyCertifictaes} from "../pages/myCertificatesPage.cy.js";
import MockData from '../../fixtures/mainData.json';
import myCertificatesSelectorsCy from "../selectors/myCertificatesSelectors.cy.js";
require('cypress-xpath');
let couresesCertificates;
let tracksCsrtificates;
let programsCertificates;
let usernameValid = MockData["studentModule"]["studentlogin"]["usernameValid"]
let passwordValid = MockData["studentModule"]["studentlogin"]["passwordValid"]
//const loginpage = new loginPage();
const myCertificatesspage = new MyCertifictaes();

describe("My Certificates Test Cases",()=>{

    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          cy.login(usernameValid,passwordValid);
          cy.visit("/home/profile?tab=my-courses");
          myCertificatesspage.navigateToMyCertificates();
        
         // loginpage.loginUser(usernameValid,passwordValid);

    });
    it("Validate my Certifictae page Sections ", () => {

        myCertificatesspage.checkTitleSections();
     
    });

    it("Validate courses Certificates section when no certificates ", () => {

        myCertificatesspage.returnZeroCoursesCertificates();
        myCertificatesspage.noCoursesCertificatesFound();
     
    });
    it("Validate Tracks Certificates section when no certificates ", () => {

        myCertificatesspage.returnZeroTracksCertificates();
        myCertificatesspage.noTracksCertificatesFound();
     
    });
    it("Validate Programs Certificates section when no certificates  ", () => {

       myCertificatesspage.returnZeroProgramsCertificates();
        myCertificatesspage.noProgramsCertificatesFound();
     
    });
    
    it("Validate Number of certificates in courses Certificates section  ",() => {
        
       // couresesCertificates = await myCertificatesspage.getAllCoursesCertificates();
       cy.getCourseCertificates().then((res)=>{
        couresesCertificates=res.response.length;
        cy.xpath(myCertificatesSelectorsCy.NumberofCouresCertificates).children().then((courseC)=>{
            if(couresesCertificates == 0){
            expect(courseC.length -1 ).equals(couresesCertificates)
            }else
            {
                expect(courseC.length).equals(couresesCertificates)
            }

        });
    });
    });
    it("Validate Number of certificates in Tracks Certificates section  ",() => {
        
       // tracksCsrtificates = await myCertificatesspage.getAllTracksCertificates();
       cy.getTrackCertificates().then((res)=>{
        tracksCsrtificates=res.response[0].length;
        cy.xpath(myCertificatesSelectorsCy.NumberofTracksCertificates).children().then((tracksC)=>{
            if(tracksCsrtificates == 0){
            expect(tracksC.length - 1 ).equals(tracksCsrtificates)
            }else
            {
                expect(tracksC.length).equals(tracksCsrtificates)
            }

        }); 
    });
    });
    it("Validate Number of certificates in Programs Certificates section  ",async() => {
      /*  
        programsCertificates = await myCertificatesspage.getAllProgramsCertificates();
        cy.xpath(myCertificatesSelectorsCy.NumberOfProgramsCertificates).children().then((programsC)=>{
            if(programsCertificates[0].length == 0){
          expect(programsC.length - 1 ).equals(programsCertificates[0].length)
            }else
            {
                expect(programsC.length).equals(programsCertificates[0].length)   
            }

      });   */
      cy.getProgramCertificates().then((res)=>{
        programsCertificates=res.response[0].length;
        cy.xpath(myCertificatesSelectorsCy.NumberofTracksCertificates).children().then((tracksC)=>{
            if(tracksCsrtificates == 0){
            expect(tracksC.length - 1 ).equals(programsCertificates)
            }else
            {
                expect(tracksC.length).equals(programsCertificates)
            }

        }); 
    });
 });

});