describe('Multiple Test Cases', () => {
    it('Search by Index', () => {
  
      //loading a url
      cy.visit('https://amazon.com')
  
      //click on a link based on index
      cy.get('.a-cardui-body').find(' .landscape-image').eq(2).click()


      //Assert 8 result headings are returned
      //cy.get('.g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').should('have.length', 8)
    })

    it('Search by Text', () => {
  
        //loading a url
        cy.visit('https://amazon.com')
    
        //click on a link based on index
        cy.get('.a-cardui-body').contains('Keyboards').click()
  
  
        //Assert 8 result headings are returned
        //cy.get('.g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').should('have.length', 8)
      })
  })