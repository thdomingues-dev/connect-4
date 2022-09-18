import { boardCols, boardRows } from '../../src/config/const'

describe('Connect-4 tests', () => {
  it('Should visit home-page', () => {
    cy.visit('/')
  })

  it('Should render board with default state', () => {
    const piecesNumber = boardCols * (boardRows + 1)

    cy.visit('/')

    cy.contains('Connect 4')
    cy.get('div > [role=group]').children().should('have.length', piecesNumber)
    cy.contains("Red's turn")
    cy.get('button').should('be.disabled').and('contain.text', 'Reset')
    cy.get('button').should('contain.text', 'Settings')
  })

  it('Should open settings modal and then close', () => {
    cy.visit('/')

    cy.contains('Settings').click()

    cy.get('[role=dialog]').should('exist')
    cy.contains('Connect 4 - Settings')

    cy.get('section > button').children().should('have.length', 1).click()
    cy.get('[role=dialog]').should('not.exist')
  })

  it('Should play moves with Red wins and reset board', () => {
    cy.visit('/')

    cy.get('div > [role=group]').children().first().click()
    cy.get('div > [role=group]').children().last().click({ force: true })
    cy.get('div > [role=group]').children().first().click()
    cy.get('div > [role=group]').children().last().click({ force: true })
    cy.get('div > [role=group]').children().first().click()
    cy.get('div > [role=group]').children().last().click({ force: true })
    cy.get('div > [role=group]').children().first().click()
    cy.get('div > [role=group]').children().last().click({ force: true })
    cy.contains('Red wins!')

    cy.contains('Reset').click()
    cy.get('div').should('not.have.css', 'background-color', 'rgb(252, 129, 129)')
    cy.get('div').should('not.have.css', 'background-color', 'rgb(250, 240, 137)')
    cy.get('button').should('be.disabled').and('contain.text', 'Reset')
    cy.contains("Red's turn")
  })
})
