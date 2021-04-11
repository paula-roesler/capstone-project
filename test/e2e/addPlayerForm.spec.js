/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit('/');
})

describe('<AddPlayerForm /> component', () => {
  it('should render', () => {
    cy.get('input[name="playerName"]').should('exist')
  })

  it('should generate a new player when the editor presses enter', () => {
    cy.get('[data-testid=inputPlayer]').type('Sue').type('{enter}')
    cy.get('[data-testid=inputPlayer]').type('Jim').type('{enter}')
  })

  
})