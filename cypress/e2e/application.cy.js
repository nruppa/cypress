describe('empty spec', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')
        cy.get(':nth-child(1) > :nth-child(1) > .MuiInputBase-root > #bootstrap-input').type('{Enter}')
        cy.get(':nth-child(1) > :nth-child(2) > .MuiInputBase-root > #bootstrap-input').type('{Enter}')
        cy.get(':nth-child(1) > :nth-child(3) > .MuiInputBase-root > #bootstrap-input').type('{Enter}')
        cy.get(':nth-child(1) > :nth-child(4) > .MuiInputBase-root > #bootstrap-input').type('{Enter}')
        cy.get(':nth-child(2) > :nth-child(1) > .MuiInputBase-root > #bootstrap-input').type('{Enter}')
        cy.get(':nth-child(2) > :nth-child(2) > .MuiInputBase-root > #bootstrap-input').type('{Enter}')
        cy.get(':nth-child(2) > :nth-child(3) > .MuiInputBase-root > #bootstrap-input').type('{Enter}')
        cy.get(':nth-child(2) > :nth-child(4) > .MuiInputBase-root > #bootstrap-input').type('{Enter}')
        cy.get('.PrivateSwitchBase-input-15').type('{Enter}')
        cy.get('.Flex-button1-3 > .MuiButtonBase-root').click()    
    })
})