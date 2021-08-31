export default describe('filtering functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('finds a country matching a search term', () => {
    cy.get('[class*=input]').type('germany');
    cy.get('[class*=card-text-container] > h2').first().contains('Germany');

    cy.visit('http://localhost:3000');

    cy.get('[class*=input]').type('zimbabwe');
    cy.get('[class*=card-text-container] > h2').first().contains('Zimbabwe');
  });

  it('filters by region', () => {
    cy.get('[class*=dropdown]').select('Asia');
    cy.get('[class*=card-items] > div:nth-child(2) > span').each(($el) => {
      expect($el).to.contain('Asia');
    });
  });
});
