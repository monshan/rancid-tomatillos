describe('Sad path testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Displays an error message if invalid or unexistant id path is visited', () => {
    cy.visit('http://localhost:3000/867530');
    cy.get('h2').contains("You're in the wrong place Bronco");
  })
})