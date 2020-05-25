describe('Log in',() => {
 
    it('Reset_password', () => {
     cy.visit('http://relax-qa.cienceapps.com')
     cy.get('.sc-fzowVh').type('viktor.kovryzhenko@eteam.io')
     cy.get('.MuiButton-label').click()
    })
  })