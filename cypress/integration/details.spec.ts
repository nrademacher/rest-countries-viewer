export default describe('Details page navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should click through to country detail pages', () => {
    cy.get('h2').first().click();
    cy.get('[class*=details-flag');
  });

  it('should navigate to another country page via clicking on a border tag', () => {
    cy.get('h2').first().click();
    cy.url().then((url) => {
      cy.get('[class*=border-countries] > span').first().click();
      cy.url().should('not.eq', url);
    });
  });

  it('should return to the main page via clicking the Back button', () => {
    cy.get('h2').first().click();
    cy.get('button').contains('Back').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
