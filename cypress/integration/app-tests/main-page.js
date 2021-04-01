describe('Go HAAM', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Should render movie poster data', () => {
    cy.get( '.theatre' )
      .first( '.poster' )
      .first( '.movie-info' )
      .first( 'h2' ).contains('Money Plane')
      .first( 'p' ).contains('2020-09-29')
  });
  it('Should render all movie posters', () => {
    cy.get( '.theatre' )
      .get( '.poster' ).should('have.length', 40)
  });
  it('Should be able to select a poster and view more information', () => {
    cy.get('.theatre').get('#694919').click()
    cy.url().should('eq', 'http://localhost:3000/694919')
  });
  it('Should be able to return to main menu from movie info menu', () => {
    cy.visit('http://localhost:3000/718444')
    cy.get('.returnButton').click()
    cy.url().should('eq', 'http://localhost:3000/')
  });
});
