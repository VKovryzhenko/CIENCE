describe('New thread open',() => {
 
    it('Meaning the actions should be loaded and the content of the right panel. ', () => {
        cy.loginAsSdr()
     cy.visit('http://relax-qa.cienceapps.com/qa')
     cy.get('.MuiSelect-root').should('have.value', '')
    cy.get('.MuiSelect-root').select('viktor.project111@gmail.com')
    cy.get(':nth-child(2) > .MuiSelect-root').select('viktor.kovryzhenko@eteam.io')
    cy.get('[style="display: flex; flex-direction: column;"] > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get(':nth-child(5) > .MuiButton-label').click()
    cy.get('.swal2-confirm').click()
    cy.get('.sc-pcLhl > .sc-fzoKki > .sc-fzpkJw').click() //blue notification should appear
    cy.get('.Mui-selected > .MuiTab-wrapper-910').should("exist")
    cy.get('.sc-pRtcU > :nth-child(1)').should("be.visible")
    })
  })
 