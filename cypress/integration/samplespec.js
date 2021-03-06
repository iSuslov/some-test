
describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('/')
      /* ==== Generated with Cypress Studio ==== */
      cy.wait(500);
      cy.get('p').should('have.text', 'Welcome to Express with Docker! Hello Ivan!');
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('h1').should('have.text', 'Express with Docker! Hello Ivan!');
      /* ==== End Cypress Studio ==== */

      cy.get('span').should('contain.text', 'production');
    })
  })