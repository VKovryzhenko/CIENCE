describe('New thread open',() => {
 
    it('An online user in a team always gets notified in the top of the left panel when a new thread arrives. ', () => {
        cy.loginAsSdr()
     cy.visit('http://relax-qa.cienceapps.com/qa')
     cy.get('.MuiSelect-root').should('have.value', '')
    cy.get('.MuiSelect-root').select('viktor.project111@gmail.com')
    cy.get(':nth-child(2) > .MuiSelect-root').select('viktor.kovryzhenko@eteam.io')
    cy.get('[style="display: flex; flex-direction: column;"] > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get(':nth-child(5) > .MuiButton-label').click()
    cy.get('.swal2-confirm').click()
    cy.get('.sc-pcLhl').should("exist")
    })
  })
 