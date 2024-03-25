Cypress.Commands.add('getAllPrograms', () => {
    let res;
    let response;
    const apiUrl = Cypress.env('apiUrl')

    cy.request({
     
        url: `${apiUrl}/programs/published?page=0&size=12&sort=id,DESC`,
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
