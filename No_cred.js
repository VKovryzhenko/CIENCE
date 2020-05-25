describe('Page of manager',() => {
 
    it('Select Team', () => {
     cy.visit('http://relax-qa.cienceapps.com')
     cy.get('.MuiButton-label-90').click()
     cy.get('.MuiTypography-root-1').should("exist")
     //cy.get('.MuiTypography-root-1').should("be.visible")
    })
  })
 