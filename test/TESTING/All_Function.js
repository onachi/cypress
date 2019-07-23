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
function SelectMotor(Manufacturer,Model,Year,Plate){ //เลือกรถยนต์,รุ่น,ปี,จังหวัด
    cy.get('#manufacturer').then(function($select){
        $select.val(Manufacturer).trigger('change', { force: true })
    })

    cy.get('#model').then(function($select){
        $select.val(Model).trigger('change', { force: true })
    })

    cy.get('#year').then(function($select){
        $select.val(Year).trigger('change', { force: true })
    })
    cy.get('#plate_province').then(function($select){
        $select.val(Plate).trigger('change',{ force: true})
    })
    cy.get('#search_motor').click()
}
function Motor(s){ //เลือกระดับประกัน
    cy.get('#motor_tab').click()
    switch (s) {
        case '1' :
            cy.get(':nth-child(2) > .css-label').click()
            cy.get(':nth-child(3) > .css-label').click()
            cy.get(':nth-child(4) > .css-label').click()
            break;
        case '2' :
            cy.get('.first > .css-label').click()
            cy.get(':nth-child(3) > .css-label').click()
            cy.get(':nth-child(4) > .css-label').click()
            break;
        case '3' :
            cy.get('.first > .css-label').click()
            cy.get(':nth-child(2) > .css-label').click()
            cy.get(':nth-child(4) > .css-label').click()
            break;
        case '3+':
            cy.get('.first > .css-label').click()
            cy.get(':nth-child(3) > .css-label').click()
            cy.get(':nth-child(2) > .css-label').click()
            break;
    }    
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
function CreditCard() { //จ่ายผ่านบัตรเครดิต
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
    cy.wait(30000)
}
function QR() { //จ่ายแบบ QRPayment
    cy.get('.nav > :nth-child(2) > a').click({force: true})
    cy.get('.qr-code-summary > .bank-account-note > .payment-method-button-block > .btn').click({force: true})
    cy.get('.qr_id').then(($btn) => {  //ดึงข้อมูลจาก id ไปเก็บไว้ในตัวแปรก่อน แล้วสร้างตัวแปรมารับ   
        var getResultStats = $btn.text() // store the button's text
        cy.log(getResultStats);})
    cy.wait(80000)
    cy.visit('https://dev-kpaymentgateway.kasikornbank.com/portal/v1/login')
    cy.get(':nth-child(1) > .login-input-tf').click().type("admin@gettgo.com")
    cy.get(':nth-child(2) > .login-input-tf').click().type("Password@1")
    cy.get('.login-button').click()
    cy.get(':nth-child(3) > .navigation-bar-item').click()
    cy.get('.form-control').click().type()
}
function CheckStatus(){ // เช็คสเตตัสหลังบ้าน
    cy.get('.qr-code-order-number').then(($btn) => {  //ดึงข้อมูลจาก id ไปเก็บไว้ในตัวแปรก่อน แล้วสร้างตัวแปรมารับ   
    var getResultStats = $btn.text() // store the button's text
    cy.log(getResultStats);   //ผลลัพธ์การค้นหา xxxx 
    var pattern = /[0-9]/g;    // Pattern to using 
    var result = getResultStats.match(pattern);
    var conbestr = result.toString();   // change to string "0,4
    var resp =  conbestr.replace(/,/g,"");   //get number format
    var orderNumber = resp;
    CheckStatusOrder(orderNumber)
    })   
}
function CheckStatusOrder(OrderNumber){ //เรียกใช้การทำงาน เช็คสถานะที่หลังบ้าน 
    Credit()
    cy.wait(30000)
    IntoStaff()
    CheckOrder(OrderNumber)
}
function IntoStaff(){ // เข้าสู่ระบบหลังบ้าน
    cy.visit('http://staging.gettgo.com/staffs/sign_in')
    cy.get('#staff_email').type('59050208@kmitl.ac.th')
    cy.get('#staff_password').type('123456789')
    cy.get('.btn').click() 
}    
function CheckOrder(OrderNumber){ //รับเลขออเดอร์ มาเช็คหลังบ้าน
    cy.visit('http://staging.gettgo.com/staff/orders')
    cy.get('#order_order_number').type(OrderNumber)
    cy.contains("ส่ง Policy แล้ว")
}
function FillCustomerInformations(){ //ใส่ข้อมูลส่วนตัว
    cy.get(':nth-child(1) > .col-sm-8 > .input-group > .input-group-addon > .sort-dropdown').then(function($select){
        $select.val('mr')
    })
    cy.get(':nth-child(1) > .col-sm-8 > .input-group > .form-control').clear().type('GETTGO')
    cy.get('.form-user-box > :nth-child(2) > .col-sm-8 > .form-control').clear().type('AUTOMATION')
    cy.get('.payer-id_card-block > .col-sm-8 > .form-control').clear().type('1179900244823')
    cy.get('.form-user-box > :nth-child(7) > .col-sm-8 > .form-control').clear().type('0861231164')

    cy.get('#payer_birthday_3i').then(function($select){
        $select.val('9')
    })
    cy.get('#payer_birthday_2i').then(function($select){
        $select.val('11')
    })  
    cy.get('#payer_birthday_1i').then(function($select){
        $select.val('1992')
    })
    cy.get('.form-user-box > :nth-child(9) > .col-sm-8 > .form-control').clear().type('earth@gettgo.com')
    cy.get(':nth-child(10) > .col-sm-8 > :nth-child(1) > .css-radio-label').click() //check benefitary
    cy.get(':nth-child(1) > .col-sm-8 > .form-control').clear().type('999/99 Muangthai Broker')

    cy.get('#payer_province').then(function($select){
        $select.val('สิงห์บุรี').trigger('change', { force: true })
    }) 
    cy.get('#payer_district').then(function($select){
        $select.val('ท่าช้าง').trigger('change', { force: true })       
    })
    cy.get('#payer_subdistrict').then(function($select){
        $select.val('ถอนสมอ').trigger('change', { force: true })     
    })

    cy.get(':nth-child(1) > .col-sm-8 > :nth-child(1) > .css-radio-label').click()
    cy.get('#checkout-info-form > .checkbox > .css-label').click()       
    cy.get('#show_travel_summary').click()
}
function genLicensePlate() { //สุ่มเลขทะเบียน
    const title = 'กข'
    const fourDigit = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    const licensePlate = title+fourDigit
    console.log(licensePlate);

    return licensePlate
}
function genVehicleModelNumber() { //สุ่มเลขตัวเครื่อง
    var modelNumber = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (var i = 0; i < 17; i++)
    modelNumber += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return modelNumber;
}