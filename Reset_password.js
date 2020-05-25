describe('Page of manager',() => {
 
    it('Select Team', () => {
     cy.visit('http://relax-qa.cienceapps.com')
     cy.get('.sc-fzowVh').type('viktor.kovryzhenko@eteam.io')
     cy.get('.MuiButton-label').click()
    })
  })
 
  //comment2