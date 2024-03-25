import MainData from "../fixtures/mainData.json"
let userid=MainData["studentModule"]["studentlogin"]["userId"];
Cypress.Commands.add('getMyCourses', () => {
    let res;
    let response;
    const apiUrl = Cypress.env('apiUrl')

    cy.request({
     
        url: `${apiUrl}/courses/learner/courses?page=0&size=12&sort=id,DESC`,
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
Cypress.Commands.add('getCourseCurriculm', () => {
    let res;
    let response;
    const apiUrl = Cypress.env('apiUrl')

    cy.request({
     
        url: `${apiUrl}/courses/learner/curriculum/courseone?learner_id=${userid}`,
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
