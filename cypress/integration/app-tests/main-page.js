describe('Go HAAM', () => {
  const baseURL = 'http://localhost:3000/'

  beforeEach(() => {
    cy.fixture('Movie-data.json')
      .then(movies => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          body: movies
        })
      });
    //cy.visit('http://localhost:3000/');
  });
  it('Should display a header', () => {
    cy.visit('http://localhost:3000');
    cy.get('header').should('be.visible')
  });
  it('Should have alt text on images', () => {
    cy.visit('http://localhost:3000');
    cy.get('.theatre').get('.poster').should('have.attr', 'alt');
  });
  it('Should render all movie posters', () => {
   cy.visit('http://localhost:3000');
    cy.get( '.theatre' )
      .get( '.poster' ).should('have.length', 9)
  });
  it('Should be able to select a poster and view more information', () => {
   cy.visit('http://localhost:3000');
    cy.get('.theatre').get('#694919').click()
    cy.url().should('eq', `${baseURL}694919`)
  });
  it('Should be able to return to main menu from movie info menu', () => {
    cy.visit(`${baseURL}718444`)
    cy.get('.returnButton').click()
    cy.url().should('eq',`${baseURL}`)
  });
});
