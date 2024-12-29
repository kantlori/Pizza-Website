describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://example.com/login');
    it("should click the home page button", () => {
      cy.get
    })
  });

  it('should display the login form', () => {
    cy.get('form').should('be.visible');
  });




});