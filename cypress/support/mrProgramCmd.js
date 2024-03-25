import MainData from "../fixtures/mainData.json"
let userid=MainData["studentModule"]["studentlogin"]["userId"];
Cypress.Commands.add('getMyProgram', () => {
    let res;
    let response;
    const apiUrl = Cypress.env('apiUrl')

    cy.request({
     
        url: `${apiUrl}/programs/learner?learnerId=${userid}`,
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