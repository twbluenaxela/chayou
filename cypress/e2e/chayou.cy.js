const testingUrl = "http://localhost:3003"

describe('frontend search bar', function () {
  it('search for tieguanyin', () => {
    cy.visit(testingUrl)
    cy.get('#search-input').type('tieguanyin')
    cy.get('#search-button').click()
    cy.contains('Tieguanyin', {timeout: 25000})
  })
  it('search for duckshit 鴨屎香', function () {
    cy.visit(testingUrl)
    cy.get('#search-input').type('duck shit')
    cy.get('#search-button').click()
    cy.contains('Duck Shit', {timeout: 25000})

  })
})