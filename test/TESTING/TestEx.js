var i = 0
function To (){
        cy.visit('http://testprod.gettgo.com/staff/search_banners')
}
function Tonew(){
        cy.visit('http://testprod.gettgo.com/staff/search_banners/new')
}
context('Cypress.Commands', () => {
        beforeEach(() => {
          cy.visit('http://testprod.gettgo.com/staff')
          
        })
        it('tc' , () => {
            cy.get('#staff_email').type('pew@gettgo.com')
            cy.get('#staff_password').type('123456789')
            cy.get('.btn').click() 
            To()
            for(i=1;i<10;i++){
                Tonew()
                cy.get('#search_banner_slug').type("Smartboys"+i) 
                cy.get('#search_banner_title').type("Smartboys"+i) 
                cy.get('#search_banner_description').type("Smartboys"+i)
                cy.get('.btn').click()
            }
        })
})