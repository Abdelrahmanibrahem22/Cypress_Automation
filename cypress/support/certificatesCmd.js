import MainData from "../fixtures/mainData.json"
let userid=MainData["studentModule"]["studentlogin"]["userId"];
Cypress.Commands.add('getCourseCertificates', () => {
    let res;
    let response;
    const apiUrl = Cypress.env('apiUrl')

    cy.request({
     
        url: `${apiUrl}/v2/user-certificates/learner/${userid}`,
        method: 'GET',
        headers: {
            accept: "application/json",
            'x-tenant-id': 'testautomation',
            Authorization:`Bearer ${Cypress.env('token')}`,
         },
     })
        .then((r) => {
         
           res=r.body
           console.log(`**response Inside Command: ${res}**`)
 
        })
        .then(() => ({
            response: res,
           }))
})
Cypress.Commands.add('getTrackCertificates', () => {
    let res;
    let response;
    const apiUrl = Cypress.env('apiUrl')

    cy.request({
     
        url: `${apiUrl}/user-track-certificates/learner?learnerId=${userid}`,
        method: 'GET',
        headers: {
            accept: "application/json",
            'x-tenant-id': 'testautomation',
            Authorization:`Bearer ${Cypress.env('token')}`,
         },
     })
        .then((r) => {
         
           res=r.body
           console.log(`**response Inside Command: ${res}**`)
 
        })
        .then(() => ({
            response: res,
           }))
})
Cypress.Commands.add('getProgramCertificates', () => {
    let res;
    let response;
    const apiUrl = Cypress.env('apiUrl')

    cy.request({
     
        url: `${apiUrl}/user-program-certificates/learner?learnerId=${userid}`,
        method: 'GET',
        headers: {
            accept: "application/json",
            'x-tenant-id': 'testautomation',
            Authorization:`Bearer ${Cypress.env('token')}`,
         },
     })
        .then((r) => {
         
           res=r.body
           console.log(`**response Inside Command: ${res}**`)
 
        })
        .then(() => ({
            response: res,
           }))
})