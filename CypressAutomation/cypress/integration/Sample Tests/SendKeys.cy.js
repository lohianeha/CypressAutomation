describe('SendKeys', () => {
    it('To send keys', () => {
  
      //loading a url
      cy.visit('https://google.com')
  
      //sending value in the text field
      cy.get('.gLFyf').type('confidence')

      //click on a button
      cy.get('.CqAVzb > center > .gNO89b').click()
    })
  })