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

  it('should focus the input after the user clicks the add button', () => {
    cy.get('input[name="playerName"]').focus()
  })

  it('should show the start game button when the user added at least two players', () => {
    cy.get('[data-testid=inputPlayer]').type('Sue').type('{enter}')
    cy.get('[data-testid=inputPlayer]').type('Jim').type('{enter}')
    cy.get('[href="/one"]').should('be.visible')
  })

  it('should change the placeholder text when 4 players are added and disable the add button', () => {
    cy.get('[data-testid=inputPlayer]').type('Sue').type('{enter}')
    cy.get('[data-testid=inputPlayer]').type('Jim').type('{enter}')
    cy.get('[data-testid=inputPlayer]').type('Joe').type('{enter}')
    cy.get('[data-testid=inputPlayer]').type('Izzy').type('{enter}')
    cy.get('input[placeholder="Your flight has reached the max. of 4 players"]').should('exist')
    cy.get('button[title="addPlayerButton"]').should('be.disabled')
  })
})