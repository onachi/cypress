import { delay } from "bluebird";

function getURL() {
    var currentLocation = document.getElementsByClassName('url')[0].getAttribute("value");
    cy.log(currentLocation)
    console.log(currentLocation)
}
function Purchase() {
    cy.get(':nth-child(1) > .motor-plan-item > .motor-plan--content > .motor-plan--button > :nth-child(2) > .btn').click({ force: true })
    cy.get('#checkout-info-form > .checkbox > .css-label').click({ force: true })
    cy.wait(500)
    cy.get('#show_travel_summary').click({ force: true })
    cy.get('#travel_info_confirmed').click({ force: true })    
}
function Credit() {
    cy.get('#credit_card > .payment-action-block > .btn').click({ force: true })
        cy.get('#cboCardType').then(function ($select) {
            $select.val('V')
        })
        cy.wait(500)
        cy.get('#txtCreditCard1').type("4987")
        cy.get('#txtCreditCard2').type("6543")
        cy.get('#txtCreditCard3').type("2109")
        cy.get('#txtCreditCard4').type("8769")

        cy.get('#txtCVV').type("111")
        cy.get('#cboMonth').then(function ($select) {
            $select.val('05')
        })
        cy.get('#cboYear').then(function ($select) {
            $select.val('2021')
        })
        cy.get('#txtCHName').type("TEST gettgo")

        cy.get('#cboBank').then(function ($select) {
            $select.val('Kasikornbank Public Company Limited')
        })
        cy.wait(4000)
        cy.get('#imgPayNow1').click({ force: true })
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.wait(4000)
        cy.get('[name="cmdContinue"]').click({ force: true })
}
function verifyListofPrice(ListofPrice){
    //cy.log(ListofPrice)
    for (let i  = 0; i <  ListofPrice.length; i++) { 
        cy.contains(ListofPrice[i])    
        }
    }
function Insuran(i){
    var insuran = ['-1','#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
    cy.get('#all_insurers').click({force: true})
    cy.get(insuran[i]).click({force: true})
    cy.get('#travel_filter_button').click({force: true})
}
function Checkplan(Plan,Day){
    cy.get('.count--items').contains(Plan)
    cy.get('.count--items').contains(Day)
}
function Login() {
    cy.get('.hidden-xs > .list-unstyled > .hl-menu > a').click()
    cy.get('#user_email').type('blackblackmaster@gmail.com')
    cy.get('#user_password').type('123456789')
    cy.get('.btn').click() 
 }
function OtherDate(i) {
    var date = new Date();
    var day = date.getDate();
    day += 1;
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var systemDatePlus1 = day + "/" + month + "/" + year
    //cy.log((day+1) + "/" + month + "/" + year);
    //cy.log((day)+ "/" + month + "/" + year);   
    //cy.log(systemDatePlus1)
    cy.get('#travel_from_date').click().clear().type(systemDatePlus1).should('have.value', systemDatePlus1)
    day += (i-1); 
    systemDatePlus1 = day + "/" + month + "/" + year
    cy.get('#travel_to_date').click().clear().type(systemDatePlus1).should('have.value', systemDatePlus1)
    return systemDatePlus1       
}
function SameDateplus(i) {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var systemDatePlus1 = day + "/" + month + "/" + year
    //cy.log((day+1) + "/" + month + "/" + year);
    //cy.log((day)+ "/" + month + "/" + year);   
    //cy.log(systemDatePlus1)
    cy.get('#travel_from_date').click().clear().type(systemDatePlus1).should('have.value', systemDatePlus1)
    day += i; 
    systemDatePlus1 = day + "/" + month + "/" + year
    cy.get('#travel_to_date').click().clear().type(systemDatePlus1).should('have.value', systemDatePlus1)
    return systemDatePlus1 
 }
 function TAOTJPoDAY() {
    cy.get('#travel_destination').then(function($select){$select.val('JPN')})
    cy.get('#travel_person').then(function($select){$select.val('1')})
    OtherDate(7)
    cy.get('#search_travel').click() 
 }
 function TAOTJPsDAY() {
    cy.get('#travel_destination').then(function($select){$select.val('JPN')})
    cy.get('#travel_person').then(function($select){$select.val('1')})
    cy.get('#search_travel').click() 
 }
 function Travel(T,P) {
    cy.get('#travel_destination').then(function($select){$select.val(T)})
    cy.get('#travel_person').then(function($select){$select.val(P)})
 }
context('Cypress.Commands', () => {
    beforeEach(() => {
      cy.visit('http://staging.gettgo.com')
      
    })
    it('tc' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA'] 
            Login()
            TAOTJPsDAY()
            Insuran(6)
            var listofPrice = ["470","900","1,400"]
            Checkplan(3,8)
            //verifyListofPrice(listofPrice)
            Purchase()
            Credit()

        })
    // it('tc_sf_001' , () => {
    // //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA'] 
    //     TAOTJPsDAY()
    //     Insuran(6)
    //     var listofPrice = ["470","900","1,400"]
    //     Checkplan(3,8)
    //     verifyListofPrice(listofPrice)
    //     })
    // it('tc_sf_002' , () => {
    // //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA'] 
    //     TAOTJPoDAY()
    //     Insuran(6)
    //     var listofPrice = ["470","900","1,400"]
    //     Checkplan(3,7)
    //     verifyListofPrice(listofPrice)
    //     })
    // it('tc_sf_003' , () => {
    // //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA'] 
    //     TAOTJPsDAY()
    //     Insuran(5)
    //     var listofPrice = ["635","295","985","1,355"]
    //     Checkplan(4,8)
    //     verifyListofPrice(listofPrice)
    //     })    
    // it('tc_sf_004' , () => {
    // //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA'] 
    //     TAOTJPoDAY()
    //     Insuran(5)
    //     var listofPrice = ["630","290","975","1,340"]
    //     Checkplan(4,7)
    //     verifyListofPrice(listofPrice)
    //     })    
    // it('tc_sf_005' , () => {
    // //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA'] 
    //     TAOTJPsDAY()
    //     Insuran(3)
    //     cy.contains('ไม่พบแผนประกันที่ตรงกับที่คุณต้องการ')
    //     })  
    // it('tc_sf_006' , () => {
    // //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA'] 
    //     TAOTJPoDAY()
    //     Insuran(3)
    //     var listofPrice = ["330","748","944","1,640"]
    //     Checkplan(4,7)
    //     verifyListofPrice(listofPrice)
    //     })  
    // it('tc_sf_007' , () => {
    // //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA'] 
    //     TAOTJPsDAY()
    //     Insuran(7)
    //     cy.contains('ไม่พบแผนประกันที่ตรงกับที่คุณต้องการ')
    //     })  
    // it('tc_sf_008' , () => {
    // //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA'] 
    //     TAOTJPoDAY()
    //     Insuran(7)
    //     var listofPrice = ["800","1,111","1,604"]
    //     Checkplan(3,7)
    //     verifyListofPrice(listofPrice)
    //     })  						
    })
