describe('Log in',() => {
 
    it('No credentials', () => {
     cy.visit('http://relax-qa.cienceapps.com')
     cy.get('.MuiButtonBase-root-118').click()
     cy.get('.MuiTypography-root-1').should("exist")
     cy.get('.sc-fzowVh').should("be.visible")
     //cy.get('.MuiTypography-root-1').should("be.visible")
    })
  })
 