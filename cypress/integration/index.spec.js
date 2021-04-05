/// <reference types="cypress" />

import HomeScreenPageObject from '../../src/components/screens/HomeScreen/HomeScreen.PageObject';

const toBeSent = {
  name: 'Gui',
  email: 'gui@gmail.com',
  message: 'Mensagem a ser mandada',
};

describe('home', () => {
  describe('when click on message button and fill the fields', () => {
    // it = teste que estamos fazendo
    it('verify success message', () => {
      /* Pre-teste */
      // intercepta a URL
      cy.intercept(
        'https://contact-form-api-jamstack.herokuapp.com/message'
      ).as('userMessage');

      /* Montagem do cenário de teste */
      const homeScreen = new HomeScreenPageObject(cy);
      homeScreen
        .fillMessageForm({
          name: toBeSent.name,
          email: toBeSent.email,
          message: toBeSent.message,
        })
        .submitMessageForm();

      /* Assercoes */
      // espera a interceptação da URL
      cy.wait('@userMessage').then(intercept => {
        expect(intercept.response).to.have.property('statusCode', 201); // verifica se o status code é 201
        // verifica os dados do response com os dos requests
        expect(intercept.response.body).to.have.property('name', toBeSent.name);
        expect(intercept.response.body).to.have.property(
          'email',
          toBeSent.email
        );
        expect(intercept.response.body).to.have.property(
          'message',
          toBeSent.message
        );
      });
    });
  });
});
