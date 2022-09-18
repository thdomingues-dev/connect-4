import { boardCols, boardRows } from '../../src/config/const';

describe('Connect-4 tests', () => {
  it('Should visit home-page', () => {
    cy.visit('/');
  });

  it('Should render board with default state', () => {
    const piecesNumber = boardCols * (boardRows + 1);

    cy.visit('/');
    cy.contains('Connect 4');
    cy.get('div > [role=group]').children().should('have.length', piecesNumber);
    cy.contains("Red's turn");
    cy.get('button').should('be.disabled').and('contain.text', 'Reset');
    cy.get('button').should('contain.text', 'Settings');
  });
})
