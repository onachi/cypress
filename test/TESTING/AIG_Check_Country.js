function Travel(T,P) { //เลือกแผนประกัน ประเทศ,จำนวนคน
    cy.get('#travel_destination').then(function($select){$select.val(T)})
    cy.get('#travel_person').then(function($select){$select.val(P)})
}
function SetDate(type,i) { // เปลี่ยนวัน ปกติหรือวันถัดไป,จำนวนวันที่ต้องการ
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    if(type === "nextday" || type == 1)
        day +=1
    var systemDatePlus1 = (day) + "/" + month + "/" + year
    cy.get('#travel_from_date').click().clear().type(systemDatePlus1).should('have.value', systemDatePlus1)
    systemDatePlus1 = (day+(i-1)) + "/" + month + "/" + year
    cy.get('#travel_to_date').click().clear().type(systemDatePlus1).should('have.value', systemDatePlus1)       
}
function ChangeInsuran(i){ //เลือกผู้ให้ประกัน
    var insuran = ['-1','#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
    cy.get('#all_insurers').click({force: true})
    cy.get(insuran[i]).click({force: true})
    cy.get('#travel_filter_button').click({force: true})
}
function verifyListofPrice(ListofPrice){ //เช็คราคาแผนกรมธรม์
    //cy.log(ListofPrice)
    for (let i  = 0; i <  ListofPrice.length; i++) { 
        cy.contains(ListofPrice[i])    
        }
    }
describe('AIG Test worldwide and asia validate price all day', () => {
    beforeEach(() => {
        cy.visit('http://staging.gettgo.com/')
    })
    it('tc AIG Country BGD' ,() => {
        Travel('BGD',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country BTN' ,() => {
        Travel('BTN',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country BRN' ,() => {
        Travel('BRN',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country KHM' ,() => {
        Travel('KHM',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country CHN' ,() => {
        Travel('CHN',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country HKG' ,() => {
        Travel('HKG',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country IND' ,() => {
        Travel('IND',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country IDN' ,() => {
        Travel('IDN',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country PRK' ,() => {
        Travel('PRK',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country MAC' ,() => {
        Travel('MAC',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country MYS' ,() => {
        Travel('MYS',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country MDV' ,() => {
        Travel('MDV',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country MNG' ,() => {
        Travel('MNG',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country MMR' ,() => {
        Travel('MMR',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country NPL' ,() => {
        Travel('NPL',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country PHL' ,() => {
        Travel('PHL',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country SGP' ,() => {
        Travel('SGP',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country LKA' ,() => {
        Travel('LKA',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country TWN' ,() => {
        Travel('TWN',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country VNM' ,() => {
        Travel('VNM',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    it('tc AIG Country KOR' ,() => {
        Travel('KOR',1)
        SetDate('nextday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        var listofPrice = ["699","322"]
        verifyListofPrice(listofPrice)
    })
    
}) 