describe('App inicial', () => {
  it('visita a página inicial e encontra o título', () => {
    cy.visit('/');
    cy.contains('h1', 'Hello, projeto-descomplica');
  });
});
