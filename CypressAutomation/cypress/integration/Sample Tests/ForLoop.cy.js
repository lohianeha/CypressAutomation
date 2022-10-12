describe ('For Loop', () => {
    it ('For Each', () => {
        //load URL
        cy.visit('https://youtube.com')

        //Enter data in Search Box
        cy.get('.style-scope ytd-searchbox').type('lipstick')

        //click Search
        cy.get('#search-icon-legacy').click()

        //wait
        cy.wait(2000)

        cy.get('#video-title > .style-scope ytd-video-renderer').each(($el, index, $list) => {
            if($el === 'ASMR LIPSTICK SLIME Mixing Lipsticks into Clear Slime Satisfying Slime Videos #56') {
               cy.wrap($el).click()
            }
        })


    })
})