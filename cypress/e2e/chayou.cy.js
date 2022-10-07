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

describe('select a specific tea', function () {
  it('search for oriental beauty', function () {
    cy.visit(testingUrl)
    cy.get('#root > div > div > div:nth-child(2) > div > div:nth-child(1)').click()
    cy.get('#teasubtypecontainer').find('button').first().click()
    cy.contains('Oriental Beauty', {timeout: 40000})

  })
})

describe('search for another tea after previously searched for tea', function () {
  beforeEach(function() {
    cy.visit(testingUrl)
    cy.get('#root > div > div > div:nth-child(2) > div > div:nth-child(1)').click()
    cy.get('#teasubtypecontainer').find('button').first().click()
    cy.contains('Oriental Beauty', {timeout: 40000})
  })
  it.only('search for assam tea after searching for oriental beauty', function () {
    cy.get('#search-input').type('assam')
    cy.get('#search-button').click()
    cy.contains('Assam', {timeout: 40000})

  })
})