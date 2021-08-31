export default describe('light/dark mode switching', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('[class*=theme-switch-icon]').click();
  });

  it('changes the theme attribute on the root element', () => {
    cy.root().should('have.attr', 'data-theme', 'dark');
  });

  it('switches CSS global theme variables', () => {
    cy.get('body')
      .should('have.css', 'background-color', 'rgb(32, 44, 55)')
      .should('have.css', 'color', 'rgb(255, 255, 255)');
    cy.get('input').should('have.css', 'color', 'rgb(255, 255, 255)');
  });

  it("changes the switch's text", () => {
    cy.get('[class*=theme-switch-text]').should('contain.text', 'Light Mode');
  });

  it('toggles back to the previous mode', () => {
    cy.get('[class*=theme-switch-icon]').click();
    cy.get('[class*=theme-switch-text]').should('contain.text', 'Dark Mode');
  });
});
