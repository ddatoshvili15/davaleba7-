describe('davaleba11.2', () => {
    beforeEach(() => { 
        cy.visit('https://automationteststore.com/index.php?rt=account/login')
        cy.login('ddobor', 'Dikuna1998!')
    })
    it ('edit account details', () => {
        cy.get('https://automationteststore.com/index.php?rt=account/edit').click()
        cy.get('#AccountFrm_firstname').clear().type('Dikuna')
        cy.get('#accountFrm_lastname').clear().type('doborjginidze')
        cy.get('button[title="Continue"]').click()
        cy.get('.alert-success').should('contain', 'Success: Your account has been successfully updated.')
    })
    it('manage address book', ()=> {
        cy.get('https://automationteststore.com/index.php?rt=account/address').click()
        cy.get('button[title="Edit"]').first().click()
        cy.get('#AddressFrm_address_1').clear().type('40 sandburg drive')
        cy.get('button[title="continue"]').click()
        cy.get('.alert-success').should('contain', 'Your address has been successfully updated')
    })
    it('change pasword', () => {
        cy.get("https://automationteststore.com/index.php?rt=account/password").click()
        cy.get('#PasswordFrm_current_password').type('Dikuna1998!')
        cy.get('#PasswordFrm_password').type('cudadvarukve123')
        cy.get('#PasswordFrm_confirm').type('cudadvarukve123')
        cy.get('button[title="Continue"]').click()
        cy.get('.alert-success').should('contain', 'Success: Your password has been successfully updated.')
    })
})

// მომხმარებლის დეტალებს შეცვლა -   Edit account details
//+ შეამოწმეთ რომ შენახვის შემდეგ ცვლილებები აისახა.
//არსებული მისამართის შეცვლა ან ახალი მისამართის დამატება
//პაროლის შეცვლა