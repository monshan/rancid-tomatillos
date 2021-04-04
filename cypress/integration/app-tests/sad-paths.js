describe('Sad path testing', () => {

  it('Displays an error message if invalid or unexistant id path is visited', () => {
    cy.visit('http://localhost:3000/867530');
    cy.get('h2').contains("You're in the wrong place Bronco");
  })

  it('Should be able to recieve an error and display on UI if invalid url is visited', () => {
    cy.visit('http://localhost:3000/694919')
    cy.intercept({
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919'
    }, {
      statusCode: 404,
      body: {
        "error": "this page does not exist"
      }
    })
    cy.get('section > h2').contains('Jhonson, we have a problem')
  })

//ADD 500 CODE TEST

})
