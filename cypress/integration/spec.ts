describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.url().should('include', 'home')
    cy.get('[data-app-title]').should('contain', 'Angular Testing')
  })
})
