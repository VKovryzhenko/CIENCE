describe('New thread open',() => {
 
    it('An online user in a team always gets notified in the top of the left panel when an existing threads updates.', () => {
        cy.loginAsSdr()
    cy.visit('http://relax-qa.cienceapps.com/qa')
    cy.get('[style="display: flex; margin-top: 120px; flex-direction: column;"] > :nth-child(3) > .MuiButton-label').click()
    cy.get(':nth-child(5) > .MuiButton-label').click()
    cy.get('.swal2-confirm').click()
    cy.wait(5000)
    cy.get('.cJtJVQ > :nth-child(2)').should("be.visible")  
    })
  })
 