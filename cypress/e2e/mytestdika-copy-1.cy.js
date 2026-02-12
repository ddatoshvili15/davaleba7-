describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/login')

    cy.get('[data-qa="signup-name"]').type("testUser")
    cy.get('[data-qa="signup-email"]').type("testUserdi1@gmail.com")
    cy.get('[data-qa="signup-button"]').click()
    cy.contains("Enter Account Information").should("be.visible")
    cy.get('#id_gender1').check()
    cy.get('[data-qa="months"]')
  })
})