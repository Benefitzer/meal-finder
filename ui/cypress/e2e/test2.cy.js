describe('ui test', () => {
    it('should contain Meal-Finder', () =>{
        cy.visit('http://localhost:3000')
        cy.contains('Meal-Finder')
    })

    it('select-box schould be shown', () =>{
        cy.visit('http://localhost:3000')
        cy.get('select[id=selectCategory]')
    })

    it('select-box should contain Beef', () =>{
        cy.visit('http://localhost:3000')
        cy.get('select[id=selectCategory]').contains('Beef')
    })

    it('select-box select', () =>{
        cy.visit('http://localhost:3000')
        cy.get('select[id=selectCategory]').select('Chicken')
        cy.wait(3000)
        cy.get('select[id=selectCategory]').select('Lamb')
    })
})