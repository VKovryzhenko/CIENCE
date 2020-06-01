describe('Log in',() => {
 
    it('Incorrect password', () => {
     cy.visit('http://relax-qa.cienceapps.com')
     cy.get(':nth-child(2) > .MuiInputBase-root-51 > .MuiInputBase-input-62').type('viktor.kovryzhenko@eteam.io')
     cy.get(':nth-child(3) > .MuiInputBase-root-51 > .MuiInputBase-input-62').type('12thuavrmvs2')
     cy.get('.MuiButton-label-90').click()
     cy.get('.MuiTypography-root-1').should("exist")
     cy.get('.MuiFormHelperText-root-143').should("be.visible")  
      // cy.get('.Mui-selected').click()
       //cy.get(':nth-child(5) > .MuiButton-label > .MuiButton-endIcon > .MuiSvgIcon-root')
       //cy.contains('Qa team').click()
    })
  })
 