describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="home-acik"]').click();
  });

  it("should click the home page button and fill in the form", () => {
    cy.get('[data-cy="returnhome-button"]').click();
    cy.get('[data-cy="home-acik"]').click();
    cy.get('header').should('be.visible');
    cy.get('form').should('be.visible');
    cy.get('[data-cy="size-small"]').click();
    cy.get('[data-cy="size-medium"]').click();
    cy.get('[data-cy="size-large"]').click();
    cy.get('[data-cy="dough-select"]').select("ince");
    cy.get('[data-cy="dough-select"]').select("normal");
    cy.get('[data-cy="dough-select"]').select("kalin");
    cy.get('[data-cy="extra-checkbox-Pepperoni"]').check();
    cy.get('[data-cy="extra-checkbox-Sosis"]').check();
    cy.get('[data-cy="extra-checkbox-Jambon"]').check();
    cy.get('[data-cy="extra-checkbox-Tavuk"]').check();
    cy.get('[data-cy="extra-checkbox-Soğan"]').check();
    cy.get('[data-cy="extra-checkbox-Domates"]').check();
    cy.get('[data-cy="extra-checkbox-Mısır"]').check();
    cy.get('[data-cy="username-input"]').type("Atabey");
    cy.get('[data-cy="order-note-input"]').type("Mantar istemiyorum.");
    cy.get('[data-cy="decrease-pizza-count"]').dblclick();
    cy.get('[data-cy="increase-pizza-count"]').click();
    cy.get('[data-cy="submit-order"]').click();
    cy.get('[data-cy="success-message"]').should('be.visible');
    cy.get('[data-cy="back-to-home"]').click();
  });

  it("should disable the submit button when less than 4 toppings are selected or username is too short", () => {
    cy.get('[data-cy="extra-checkbox-Pepperoni"]').check();
    cy.get('[data-cy="extra-checkbox-Sosis"]').check();
    cy.get('[data-cy="submit-order"]').should('be.disabled');

    cy.get('[data-cy="username-input"]').type("At");
    cy.get('[data-cy="submit-order"]').should('be.disabled');

    cy.get('[data-cy="extra-checkbox-Jambon"]').check();
    cy.get('[data-cy="submit-order"]').should('be.disabled');

    cy.get('[data-cy="extra-checkbox-Mısır"]').check();
    cy.get('[data-cy="submit-order"]').should('be.disabled');

    cy.get('[data-cy="extra-checkbox-Mısır"]').uncheck();
    cy.get('[data-cy="username-input"]').type("Ata");
    cy.get('[data-cy="submit-order"]').should('be.disabled');
  });

  it("should enable the submit button when 4 toppings are selected and username is valid", () => {
    cy.get('[data-cy="extra-checkbox-Pepperoni"]').check();
    cy.get('[data-cy="extra-checkbox-Sosis"]').check();
    cy.get('[data-cy="extra-checkbox-Jambon"]').check();
    cy.get('[data-cy="extra-checkbox-Tavuk"]').check();
    cy.get('[data-cy="username-input"]').type("Atabey");
    cy.get('[data-cy="submit-order"]').should('not.be.disabled');
  });

  it("should show an alert when more than 10 toppings are selected", () => {
    const toppings = [
      'Pepperoni', 'Sosis', 'Jambon', 'Tavuk', 'Soğan', 'Domates',
      'Mısır', 'Sucuk', 'Jalapeno', 'Sarımsak', 'Biber', 'Ananas', 'Kabak'
    ];
    toppings.forEach((topping) => {
      cy.get(`[data-cy="extra-checkbox-${topping}"]`).check();
    });
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('En fazla 10 malzeme seçebilirsiniz.');
    });
  });

  it("should not allow more than 10 toppings to be selected", () => {
    const toppings = [
      'Pepperoni', 'Sosis', 'Jambon', 'Tavuk', 'Soğan', 'Domates',
      'Mısır', 'Sucuk', 'Jalapeno', 'Sarımsak', 'Biber'
    ];
    toppings.forEach((topping) => {
      cy.get(`[data-cy="extra-checkbox-${topping}"]`).check();
    });
    cy.get('[data-cy="extra-checkbox-Kabak"]').should('not.be.checked');
  });
});
