describe('Stubbing Tests', () => {
  // beforeEach(() => {
  //   cy.visit('http://localhost:3000/');
  // });

  it('Should be able to click on a unique poster and direct user to related page', () => {
    cy.visit('http://localhost:3000/');
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:3000/694919'
    }, {
      statusCode: 201,
      body: {
        "id": 694919,
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "title": "Money Plane",
        "average_rating": 6.666666666666667,
        "release_date": "2020-09-29"
      }
    })
    cy.get('.theatre').get('#694919').click()
    .url().should('include', '/')
  })

  it('Should successfully GET all posters from API server', () => {
    cy.visit('http://localhost:3000/');
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:3000'
    }, {
      statusCode: 201,
      body: {
       'movies': [{}, {}]
      }
    })
    .url().should('include', '/')
  })

  it('Should be able to recieve an error and display on UI if invalid url is visited', () => {
    cy.visit('http://localhost:3000/875629')
    // cy.intercept({
    //   url: 'http://localhost:3000/875629'
    // }, {
    //   statusCode: 404,
    //   body: {
    //     "error": "No movie found with id:875629"
    //   }
    // })
    cy.get('section > h2').should('eq', 'Jhonson, we have a problem')
  })
})
