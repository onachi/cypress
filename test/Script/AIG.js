function Login(){ // เข้าสู่ระบบ
    cy.get('.hidden-xs > .list-unstyled > .hl-menu > a').click()
    cy.get('#user_email').type('blackblackmaster@gmail.com')
    cy.get('#user_password').type('123456789')
    cy.get('.btn').click() 
}
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
function Checkplan(Plan,Day){ //เช็คจำนวน แผน,จำนวนวัน
    cy.get('.count--items').contains(Plan)
    cy.get('.count--items').contains(Day)
    //cy.contains('ไม่พบแผนประกันที่ตรงกับที่คุณต้องการ')
}
function verifyListofPrice(ListofPrice){ //เช็คราคาแผนกรมธรม์
    //cy.log(ListofPrice)
    for (let i  = 0; i <  ListofPrice.length; i++) { 
        cy.contains(ListofPrice[i])    
        }
    }
function Purchase() { //การเลือกซื้อประกัน
    cy.get(':nth-child(1) > .motor-plan-item > .motor-plan--content > .motor-plan--button > :nth-child(2) > .btn').click({ force: true })
    cy.get('#checkout-info-form > .checkbox > .css-label').click({ force: true })
    cy.wait(5000)
    cy.get('#show_travel_summary').click({ force: true })
    cy.get('#travel_info_confirmed').click({ force: true })    
}

context('AIG Test worldwide and asia validate price all day', () => {
    beforeEach(() => {
        //cy.visit('https://dev-kpaymentgateway.kasikornbank.com/portal/v1/login') 
        cy.visit('http://staging.gettgo.com/')
    })
    it('tc AIG Sameday' ,() => {
        SetDate('sameday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.contains('ไม่พบแผนประกันที่ตรงกับที่คุณต้องการ')
    })
    it('tc AIG 1-3 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["483","213"]
        SetDate('nextday',2) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 4-6 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["556","249"]
        SetDate('nextday',5) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 7-10 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["699","322"]
        SetDate('nextday',8) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 11-14 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["843","395"]
        SetDate('nextday',12) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 15-18 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["986","467"]
        SetDate('nextday',16) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 19-22 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["1,094","522"]
        SetDate('nextday',20) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 23-27 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["1,202","577"]
        SetDate('nextday',24) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
     it('tc AIG 28-31 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["1,309","631"]
        SetDate('nextday',29) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 32-38 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["1,561","758"]
        SetDate('nextday',33) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 39-45 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["1,813","885"]
        SetDate('nextday',40) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 46-52 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["2,063","1,011"]
        SetDate('nextday',47) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 53-59 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["2,315","1,139"]
        SetDate('nextday',54) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 60-66 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["2,567","1,265"]
        SetDate('nextday',61) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 67-73 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["2,819","1,393"]
        SetDate('nextday',68) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 74-80 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["3,070","1,519"]
        SetDate('nextday',75) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 81-87 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["3,322","1,646"]
        SetDate('nextday',82) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 88-94 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["3,574","1,773"]
        SetDate('nextday',89) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 95-101 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["3,825","1,900"]
        SetDate('nextday',96) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 102-108 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["4,077","2,027"]
        SetDate('nextday',103) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 109-115 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["4,329","2,154"]
        SetDate('nextday',110) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 116-122 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["4,581","2,280"]
        SetDate('nextday',117) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 123-129 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["4,832","2,408"]
        SetDate('nextday',124) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 130-136 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["5,084","2,534"]
        SetDate('nextday',131) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 137-143 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["5,336","2,661"]
        SetDate('nextday',138) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 144-150 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["5,587","2,788"]
        SetDate('nextday',145) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 151-157 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["5,839","2,915"]
        SetDate('nextday',152) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 158-164 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["6,091","3,042"]
        SetDate('nextday',159) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 165-171 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["6,343","3,169"]
        SetDate('nextday',166) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 172-178 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["6,594","3,295"]
        SetDate('nextday',173) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 180 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["6,846","3,423"]
        SetDate('nextday',179) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 180+' ,() => {
        SetDate('nextday',181)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.contains('ไม่พบแผนประกันที่ตรงกับที่คุณต้องการ')
    })

    //Worldwide

    it('tc AIG Sameday' ,() => {
        SetDate('sameday',7)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.contains('ไม่พบแผนประกันที่ตรงกับที่คุณต้องการ')
    })
    it('tc AIG 1-3 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["627","286"]
        Travel('worldwide',1)
        SetDate('nextday',2) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 4-6 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["735","341"]
        Travel('worldwide',1)
        SetDate('nextday',5) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 7-10 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["843","395"]
        Travel('worldwide',1)
        SetDate('nextday',8) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 11-14 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["1,059","503"]
        Travel('worldwide',1)
        SetDate('nextday',12) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 15-18 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["1,237","594"]
        Travel('worldwide',1)
        SetDate('nextday',16) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 19-22 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        Travel('worldwide',1)
        var listofPrice = ["1,381","667"]
        SetDate('nextday',20) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 23-27 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        Travel('worldwide',1)
        var listofPrice = ["1,488","721"]
        SetDate('nextday',24) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
     it('tc AIG 28-31 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        Travel('worldwide',1)
        var listofPrice = ["1,561","758"]
        SetDate('nextday',29) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 32-38 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["1,813","885"]
        Travel('worldwide',1)
        SetDate('nextday',33) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 39-45 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["2,063","1,011"]
        Travel('worldwide',1)
        SetDate('nextday',40) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 46-52 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["2,315","1,139"]
        Travel('worldwide',1)
        SetDate('nextday',47) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 53-59 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["2,567","1,265"]
        Travel('worldwide',1)
        SetDate('nextday',54) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 60-66 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["2,819","1,393"]
        Travel('worldwide',1)
        SetDate('nextday',61) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 67-73 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["3,070","1,519"]
        Travel('worldwide',1)
        SetDate('nextday',68) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 74-80 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["3,322","1,646"]
        Travel('worldwide',1)
        SetDate('nextday',75) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 81-87 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["3,574","1,773"]
        Travel('worldwide',1)
        SetDate('nextday',82) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 88-94 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["3,825","1,900"]
        Travel('worldwide',1)
        SetDate('nextday',89) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 95-101 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["4,077","2,027"]
        Travel('worldwide',1)
        SetDate('nextday',96) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 102-108 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["4,329","2,154"]
        Travel('worldwide',1)
        SetDate('nextday',103) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 109-115 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["4,581","2,280"]
        Travel('worldwide',1)
        SetDate('nextday',110) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 116-122 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["4,832","2,408"]
        Travel('worldwide',1)
        SetDate('nextday',117) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 123-129 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["5,084","2,534"]
        Travel('worldwide',1)
        SetDate('nextday',124) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 130-136 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["5,336","2,661"]
        Travel('worldwide',1)
        SetDate('nextday',131) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 137-143 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["5,587","2,788"]
        Travel('worldwide',1)
        SetDate('nextday',138) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 144-150 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["5,839","2,915"]
        Travel('worldwide',1)
        SetDate('nextday',145) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 151-157 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["6,091","3,042"]
        Travel('worldwide',1)
        SetDate('nextday',152) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 158-164 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["6,343","3,169"]
        Travel('worldwide',1)
        SetDate('nextday',159) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 165-171 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["6,594","3,295"]
        Travel('worldwide',1)
        SetDate('nextday',166) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 172-178 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["6,846","3,423"]
        Travel('worldwide',1)
        SetDate('nextday',173) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 180 DAY' , () => {
        //[#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
        var listofPrice = ["7,098","3,549"]
        Travel('worldwide',1)
        SetDate('nextday',179) // Type{nextday,sameday},Noday
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.get('.count--items').contains(2)
        verifyListofPrice(listofPrice)
    })
    it('tc AIG 180+' ,() => {
        Travel('worldwide',1)
        SetDate('nextday',181)
        cy.get('#search_travel').click()
        ChangeInsuran(1)
        cy.contains('ไม่พบแผนประกันที่ตรงกับที่คุณต้องการ')
    })
})
    
