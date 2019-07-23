function Travel(T,P) { //เลือกแผนประกัน ประเทศ,จำนวนคน
    cy.get('#travel_destination').then(function($select){$select.val(T)})
    cy.get('#travel_person').then(function($select){$select.val(P)})
}

describe('validate lead box format' , () =>{
    beforeEach(() =>{
        cy.viewport(1280, 900)
        cy.visit('http://staging.gettgo.com')
    })
    it(' test 1' , ()=> {
        Travel('JPN',1)
        cy.get('#search_travel').click() 

    })

})