 Cypress.Commands.add('login', (username , password) => {
    // const username = "abdelrahman.ibrahem+20@mobidevlabs.com"
   // const password = "@Aa12345"
    let idToken;
    let token =Cypress.env('token')

    cy.request({
     
        url: `https://testautomation.majaalis-testing.com/api/login`,
        method: 'POST',
        headers: {
          'Cookie':'_hjSessionUser_3645496=eyJpZCI6IjViMjViMDgwLWU2OGUtNTNmZC05Mjc3LWFhMjdjZTE0MjBmNSIsImNyZWF0ZWQiOjE3MTAxNjc4NTk0NjIsImV4aXN0aW5nIjp0cnVlfQ==; _ga=GA1.1.1708683633.1710233459; _fbp=fb.1.1710327400076.536510305; _ga_8XW5CXZ7D2=GS1.1.1710421494.3.1.1710422031.0.0.0; _hjSession_3645496=eyJpZCI6ImY4YzJjNTg4LTdjNjgtNDU5Ny05ZGRlLTEyMzJiM2UxNGRlYiIsImMiOjE3MTA0MjU4NjgzNDQsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=; iron-session/examples/next.js=Fe26.2*1*23c43e0237056dc2ec2a457b49cc5f7821fe13ef85f00498a47aeeac77de28aa*cucYzDPEe8cPkxbKvAnDjw*QSO4zZrSywjGALGQUd-HiGp7K6c2DoFYAzIh4Fh3n53dbmNIhdrTZ2NZ-z0OQ058xbv3bZEFQRZ3Obl6qQCYD3KarARJBwJAgI38twpB8wRCmIJaLAJ7d7uEt3rswsVHikY55s8RTtQiIgaur2xHQHTiR7bugNOk7YVV4xk6cG00FNS-yVSD3U0p3jiGUf1osOHWB9qEw_hf0H9IgilX_Q4W7dvetzrWY9dp-cb4EpPe9EM1O2ye1QnQSOe_KrCx59oaZUmlwKP9eublw9km8SzO365XCx2tS-w8Sl7nJtm9uK6ZVovoBx_mQyh1uVRbIvS1jeHtNJS3d6JU-tE4kW8jS5R5P6g4-bNiFbn5-jYUH18_DC9TZR3EYIzhD7TFsnmcYnSd12e7oHw0NnZ2pdWWhWeuVPZqrxnYKcgaO2Vb4ecUxS0nR7BKbrwpQpbzXw5ur4md1vom2gcgiFRecmJmq6OXW2FDdxBIuWyier8sT4IxaOV0ggm5WoiLfxLHHTHE9R_OZqxQdRzr59qT0bYGjpnq9M9_4WPHpLLfpCeydHMEvzfwv4cjcgiPzWkqMjPX4zx14gTbFqzrvRe5fg*1711722578421*f45052cca9a1af48a02c1770efa29e3210c54f45cec9bf117041b979881fb090*jVldgNy1UrQFlrim7t9o_nd0ERETnPLcllAefmYd6Aw~2' 
        },
        body: {'username':username, 'password':password}
    })
        .then((response) => {
         
           // window.localStorage.setItem('token', response.body.user.token)
           idToken=response.body.token
           Cypress.env('token',response.body.token)

            /*cy.log('**user created**')
            cy.log(`**token: ${response.body.token}**`)
            cy.log(`${Cypress.env('token')}`)

            cy.log(`**email: ${username}**`)
            cy.log(`**password: ${password}**`)
            */
        })
        .then(() => ({
             username: username,
             token:idToken
          }))
})