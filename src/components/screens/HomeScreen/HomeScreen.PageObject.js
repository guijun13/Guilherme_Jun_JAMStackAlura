export default class HomeScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    cy.visit('/');
    cy.get('#message-button').click();
  }

  fillMessageForm({ name, email, message }) {
    this.cy.get('#messageForm input[name="name"]').first().type(name);
    this.cy.get('#messageForm input[name="email"]').first().type(email);
    this.cy.get('#messageForm textarea[name="message"]').first().type(message);

    return this;
  }

  submitMessageForm() {
    this.cy.get('#messageForm button[type="submit"]').first().click();
    return this;
  }
}
