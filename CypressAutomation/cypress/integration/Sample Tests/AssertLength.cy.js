describe('Assert', () => {
    it('Assert length', () => {
  
      //loading a url
      cy.visit('https://google.com')
  
      //sending value in the text field
      cy.get('.gLFyf').type('cypress')

      //click on a button
      cy.get('.CqAVzb > center > .gNO89b').click()

      //Assert 8 result headings are returned
      cy.get('.g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').length
    })
  })