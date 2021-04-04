/// <reference types="cypress" />

describe('index', () => {
  // it = teste que estamos fazendo
  it('click on message button, fill the fields and verify success message', () => {
    cy.visit('/');
    cy.get('#message-button').click();
    cy.get('#messageForm input[name="name"]').first().type('Gui');
    cy.get('#messageForm input[name="email"]').first().type('gui@gmail.com');
    cy.get('#messageForm textarea[name="message"]')
      .first()
      .type('Mensagem enviada no campo textarea');
    cy.get('#messageForm button[type="submit"]').first().click();
  });
});
