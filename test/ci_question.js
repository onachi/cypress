function login(){ // เข้าสู่ระบบ
    cy.get('.hidden-xs > .list-unstyled > .hl-menu > a').click()
    cy.get('#user_email').type('blackblackmaster@gmail.com')
    cy.get('#user_password').type('123456789{enter}')
}
function buycancer(age,Sum_insured){
    cy.get('#insurance_tabs > :nth-child(4) > a').click()
    cy.get('#age').then(function($select){$select.val(age)})
    cy.get('#cancer_sum_insured').then(function($select){$select.val(Sum_insured)})
    cy.get('#cancer_property').click()
}
function fillinfotni(sex){
    cy.get(':nth-child(4) > .col-sm-8 > .input-group > .input-group-addon > select')
      .then(function(select){select.val(sex)})
    cy.get('#order-info > .checkbox > .css-label').click()
    cy.get(':nth-child(13) > .col-sm-8 > .form-control').type('170')
    cy.get(':nth-child(14) > .col-sm-8 > .form-control').type('65')
    cy.get(':nth-child(15) > .col-sm-8 > .form-control').then(function($select){$select.val('ข้าราชการ')})
    cy.get(':nth-child(16) > .col-sm-8 > .form-control').type('xxx')
    cy.get('.checkbox-inline > .css-label').click()
    cy.get('#show_cancer_summary').click()
}
function fillinfo(){
    cy.get('#order-info > .checkbox > .css-label').click()
    // cy.get('#insured_birthday_1i').then(function(select){select.val('2535')})
    cy.wait(1000)
    cy.get(':nth-child(13) > .col-sm-8 > .form-control').type('170')
    cy.get(':nth-child(14) > .col-sm-8 > .form-control').type('65')
    cy.get(':nth-child(15) > .col-sm-8 > .form-control').then(function($select){$select.val('ข้าราชการ')})
    cy.get(':nth-child(16) > .col-sm-8 > .form-control').type('xxx')
    cy.get('.checkbox-inline > .css-label').click()
    cy.get('#show_cancer_summary').click()
}
function question_bki1(insurer,sum_insured){
    if (insurer == 'bki') insurer = 'กรุงเทพประกันภัย'
    else if (insurer == 'mti') insurer = 'เมืองไทยประกันภัย'
    else if (insurer == 'tni') insurer = 'ธนชาตประกันภัย'
    cy.get(':nth-child(5) > .col-md-8 > .checkbox-inline > .css-radio-label').click()
    cy.get('#payer_existed_ci_ci_insurer').then(function($select){$select.val(insurer)})
    cy.get('#payer_existed_ci_ci_si').type(sum_insured)

    cy.get(':nth-child(7) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(3) > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(11) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(13) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(15) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()
    cy.get('#cancer_question_submit').click()
}
function question_bki2(type){//[มะเร็งเต้านม,มะเร็งมดลูกหรือมะเร็งปากมดลูก,มะเร็งรังไข่,มะเร็งลำไส้,มะเร็งเม็ดเลือดขาว]
    cy.get(':nth-child(5) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    
    cy.get(':nth-child(7) > .col-md-8 > .checkbox-inline > .css-radio-label').click()
    cy.get('#payer_family_cancer_patient').then(function($select){$select.val('พ่อ')})
    cy.get('#familycancer_cancertype').then(function($select){$select.val(type)})

    cy.get(':nth-child(3) > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(11) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(13) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(15) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()
    cy.get('#cancer_question_submit').click()
}
function question_bki3(a){// = 1
    cy.get(':nth-child(5) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(7) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    cy.log(a)
    if(a=='1') cy.get(':nth-child(9) > :nth-child(2) > .checkbox-inline > .css-radio-label').click()
    else if (a=='2')cy.get(':nth-child(9) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()
    else  cy.get(':nth-child(3) > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(11) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(13) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(15) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()
    cy.get('#cancer_question_submit').click()
}
function question_bki4(qty){//["สูบบุหรี่ไม่เกิน 5 มวนต่อวัน", "สูบบุหรี่ไม่เกิน 10 มวนต่อวัน", "สูบบุหรี่ 11 มวน ถึง 20 มวนต่อวัน"]                        
    cy.get(':nth-child(5) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(7) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(3) > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(11) > .col-md-8 > .checkbox-inline > .css-radio-label').click()
    cy.get('#smoke_qty').then(function(select){select.val(qty)})
    cy.get('#payer_smoke_period').type('10')

    cy.get(':nth-child(13) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(15) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()
    cy.get('#cancer_question_submit').click()
}
function question_bki5(type){
    //["โรคความดันโลหิตสูง", "โรคปอด", "โรคไวรัสตับอักเสบ B", "โรคไวรัสตับอักเสบ C", "ซีสต์ชนิดถุงน้ำ", "ซีสต์ชนิดก้อนเนื้อ, เนื้องอก, มะเร็ง", "โรคเบาหวาน", "โรคตับ", "โรคภูมิคุ้มกันบกพร่องหรือเอดส์", "โรคเกี่ยวกับทางเดินปัสสาวะและระบบสืบพันธุ์", "โรคเลือด", "โรค SLE", "โรคเกี่ยวกับต่อมไทรอยด์หรือต่อมไร้ท่ออื่นๆ", "โรคเกี่ยวกับระบบทางเดินอาหาร", "โรคพิษสุราเรื้อรัง", "other"]            
    cy.get(':nth-child(5) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(7) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(3) > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(11) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(13) > :nth-child(2) > .checkbox-inline > .css-radio-label').click()
    cy.get('#payer_serious_disease_detail').then(function(select){select.val(type)})

    cy.get(':nth-child(15) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()
    
    cy.get('#cancer_question_submit').click()
}
function question_bki6(){
    cy.get(':nth-child(5) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(7) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(3) > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(11) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    cy.get(':nth-child(13) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()
    
    cy.get(':nth-child(15) > :nth-child(2) > .checkbox-inline > .css-radio-label').click()
    cy.get('#payer_surgery_detail').type('xxx')

    cy.get('#cancer_question_submit').click()
}
function question_tni1(insurer,sum_insured){
    if (insurer == 'bki') insurer = 'กรุงเทพประกันภัย'
    else if (insurer == 'mti') insurer = 'เมืองไทยประกันภัย'
    else if (insurer == 'tni') insurer = 'ธนชาตประกันภัย'
    cy.get(':nth-child(5) > .col-md-8 > .checkbox-inline > .css-radio-label').click()
    cy.get('#payer_existed_ci_ci_insurer').then(function($select){$select.val(insurer)})
    cy.get('#payer_existed_ci_ci_si').type(sum_insured)

    cy.get(':nth-child(7) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(9) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(11) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()
   
    cy.get('#cancer_question_submit').click()

}

function question_tni2(type){
    cy.get(':nth-child(5) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(7) > .col-md-8 > .checkbox-inline > .css-radio-label').click()
    cy.get('#payer_family_cancer_patient').then(function($select){$select.val('พ่อ')})
    cy.get('#familycancer_cancertype').then(function($select){$select.val(type)})

    cy.get(':nth-child(9) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(11) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()
   
    cy.get('#cancer_question_submit').click()
}

function question_tni3(qty){//0 = ไม่สูบ , 1 = สูบ 1-15 , 2 = สูบเกิน15
    cy.get(':nth-child(5) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(7) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    if(qty==0)cy.get(':nth-child(9) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()
    else if(qty==1)cy.get(':nth-child(9) > :nth-child(2) > .checkbox-inline > .css-radio-label').click()
    else if(qty==2)cy.get(':nth-child(3) > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(11) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()

    cy.get('#cancer_question_submit').click()

}
function question_tni4(value){//[โรคไวรัสตับอักเสบ B, C (ไม่ว่าจะเป็นพาหะหรือเตยเป็น),โรคเอดส์ หรือมีเลือดบวกต่อไวรัส HIV],โรคมะเร็ง,ปอดอักแสบเรื้อรัง,เนื้องอก ก้อนเนื้อ ตุ่มเนื้อ ชีสต์,ปากมดลูก หรือ ช่องคลอดอักเสบเรื้อรัง]
    cy.get(':nth-child(5) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(7) > .col-md-3 > .checkbox-inline > .css-radio-label').click()   

    cy.get(':nth-child(9) > .col-md-offset-1 > .checkbox-inline > .css-radio-label').click()
    
    cy.get(':nth-child(11) > :nth-child(2) > .checkbox-inline > .css-radio-label').click()
    cy.get('#payer_existedcancer_detail').then(function(select){select.val(value)})

    cy.get('#cancer_question_submit').click()

}
function question_mti1(insurer,sum_insured){//[insurer = กรุงเทพประกันภัย,เมืองไทยประกันภัย,ธนชาตประกันภัย,other]
    if (insurer == 'bki') insurer = 'กรุงเทพประกันภัย'
    else if (insurer == 'mti') insurer = 'เมืองไทยประกันภัย'
    else if (insurer == 'tni') insurer = 'ธนชาตประกันภัย'
    cy.get(':nth-child(5) > .col-md-8 > .checkbox-inline > .css-radio-label').click()
    cy.get('#payer_existed_ci_ci_insurer').then(function($select){$select.val(insurer)})
    cy.get('#payer_existed_ci_ci_si').type(sum_insured)

    cy.get(':nth-child(7) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(9) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(11) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get('#cancer_question_submit').click()

}
function question_mti2(type){//[มะเร็งเต้านม,มะเร็งมดลูกหรือมะเร็งปากมดลูก,มะเร็งรังไข่,มะเร็งลำไส้,มะเร็งจอตา,มะเร็งเม็ดเลือดขาว]
    cy.get(':nth-child(5) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(7) > .col-md-8 > .checkbox-inline > .css-radio-label').click()
    cy.get('#payer_family_cancer_patient').then(function($select){$select.val('พ่อ')})
    cy.get('#familycancer_cancertype').then(function($select){$select.val(type)})

    cy.get(':nth-child(9) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(11) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get('#cancer_question_submit').click()

}
function question_mti3(smoke_qty,smoke_past,smoke_period){
    cy.get(':nth-child(5) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(7) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(9) > .col-md-8 > .checkbox-inline > .css-radio-label').click()
    cy.get('#smoke_presentqty').type(smoke_qty)
    cy.get('#smoke_pastqty').type(smoke_past)
    cy.get('#smoke_period').type(smoke_period)

    cy.get(':nth-child(11) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get('#cancer_question_submit').click()

}
function question_mti4(s,value,c){//[เนื้องอก,ก้อนเนื้อ,ตุ่มเนื้อ]//[1 เดือน,6 เดือน,3 เดือน,1 ปี หรือ มากกว่า]

    cy.get(':nth-child(5) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(7) > .col-md-3 > .checkbox-inline > .css-radio-label').click()

    cy.get(':nth-child(9) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
//[เนื้องอก,ก้อนเนื้อ,ตุ่มเนื้อ]
    cy.get(':nth-child(11) > .col-md-8 > .checkbox-inline > .css-radio-label').click()
    
    switch (s) {
        case '1' :
            cy.get(':nth-child(1) > .col-xs-12 > .checkbox-inline > .css-label').click()
            break;
        case '2' :
            cy.get(':nth-child(2) > :nth-child(1) > .checkbox-inline > .css-label').click({})
            cy.get('#disease_tumor_category').then(function($select){$select.val(value)})
            cy.get('#disease_tumor_part').type('หำ')
            cy.get(':nth-child('+c+') > .col-sm-12 > .checkbox-inline > .css-radio-label').click()
            break;
        case '3' :
            //[1 เดือน,6 เดือน,3 เดือน,1 ปี หรือ มากกว่า]
            cy.get(':nth-child(3) > .col-xs-12 > :nth-child(1) > .css-label').click({})
            
            cy.get('#disease_cysts_category').type('หำ')
            if (c == '1'){
            cy.get('.col-sm-6 > .checkbox-inline > .css-radio-label').click()
            cy.get('#disease_cysts_situation_period').then(function($select){$select.val(value)})
            }
            else
            cy.get('.col-sm-11 > .checkbox-inline > .css-radio-label').click()
            break;
    } 
    cy.get('#cancer_question_submit').click()
}
function question_mti_all(a,b,c,d,v,s){
    
    if(a == 'no' || a == '0')
        cy.get(':nth-child(5) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    
    else{
        cy.get(':nth-child(5) > .col-md-8 > .checkbox-inline > .css-radio-label').click()
        cy.get('#payer_existed_ci_ci_insurer').then(function($select){$select.val()})
        cy.get('#payer_existed_ci_ci_si').type()
    }
    //[กรุงเทพประกันภัย,เมืองไทยประกันภัย,ธนชาตประกันภัย,other]

    if(b == 'no' || b == '0')
        cy.get(':nth-child(7) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    else{
        cy.get(':nth-child(7) > .col-md-8 > .checkbox-inline > .css-radio-label').click()
        cy.get('#payer_family_cancer_patient').then(function($select){$select.val('พ่อ')})
        cy.get('#familycancer_cancertype').then(function($select){$select.val()})

    }
        
    if(c == 'no' || c == '0')
        cy.get(':nth-child(9) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    else{
        cy.get(':nth-child(9) > .col-md-8 > .checkbox-inline > .css-radio-label').click()
        cy.get('#smoke_presentqty').type()
        cy.get('#smoke_pastqty').type()
        cy.get('#smoke_period').type()

    }
    
    if(d == 'no' || d == '0')
        cy.get(':nth-child(11) > .col-md-3 > .checkbox-inline > .css-radio-label').click()
    else{
        cy.get(':nth-child(11) > .col-md-8 > .checkbox-inline > .css-radio-label').click()
        switch (s) {
            case '1' :
                cy.get(':nth-child(1) > .col-xs-12 > .checkbox-inline > .css-label').click()
                break;
            case '2' :
                cy.get(':nth-child(2) > :nth-child(1) > .checkbox-inline > .css-label').click()
            
                break;
            case '3' :
                cy.get(':nth-child(3) > .col-xs-12 > :nth-child(1) > .css-label').click()
                cy.get('#disease_cysts_category').type()
                cy.get('.col-sm-6 > .checkbox-inline > .css-radio-label').then(function($select){$select.val()})
                cy.get('.col-sm-11 > .checkbox-inline > .css-radio-label').click()
                break;
        }   
    }
}
function buy_mti(){
    if (count%2 == 0) var age = 28
    else var age = 29
    cy.log(age)
    var sum_insured = 500000
    buycancer(age,sum_insured)
    cy.get(':nth-child(4) > .motor-plan-item > [style="padding-bottom: 15px; padding-top: 5px;"] > [style="padding-left: 5px; padding-right: 15px;"] > .btn').click()
}
function buy_bki(){
    if (count%2 == 0) var age = 28
    else var age = 29
    cy.log(age)
    var sum_insured = 500000
    buycancer(age,sum_insured)
    cy.get(':nth-child(2) > .motor-plan-item > [style="padding-bottom: 15px; padding-top: 5px;"] > [style="padding-left: 5px; padding-right: 15px;"] > .btn').click()
}
function buy_tni(s){
    if (count%2 == 0) var age = 28
    else var age = 29  
    cy.log(age)  
    var sum_insured = s
    buycancer(age,sum_insured)
    cy.get(':nth-child(3) > .motor-plan-item > [style="padding-bottom: 15px; padding-top: 5px;"] > [style="padding-left: 5px; padding-right: 15px;"] > .btn').click()
}
var count = 1
describe('Check Validate Question Cancer',() =>{
    beforeEach(() => {
        cy.visit('http://alpha.gettgo.com/')
        cy.viewport(1280, 900)
        login()
        count++
    })
 
    // it('mti Question 1.1',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti1('bki',600000)
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('mti Question 1.2',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti1('mti',600000)
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 1.3',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti1('tni',600000)
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('mti Question 2.1',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti2('มะเร็งเต้านม')//[มะเร็งเต้านม,มะเร็งมดลูกหรือมะเร็งปากมดลูก,มะเร็งรังไข่,มะเร็งลำไส้,มะเร็งจอตา,มะเร็งเม็ดเลือดขาว]
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 2.2',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti2('มะเร็งมดลูกหรือมะเร็งปากมดลูก')//[มะเร็งเต้านม,มะเร็งมดลูกหรือมะเร็งปากมดลูก,มะเร็งรังไข่,มะเร็งลำไส้,มะเร็งจอตา,มะเร็งเม็ดเลือดขาว]
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 2.3',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti2('มะเร็งรังไข่')//[มะเร็งเต้านม,มะเร็งมดลูกหรือมะเร็งปากมดลูก,มะเร็งรังไข่,มะเร็งลำไส้,มะเร็งจอตา,มะเร็งเม็ดเลือดขาว]
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 2.4',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti2('มะเร็งลำไส้')//[มะเร็งเต้านม,มะเร็งมดลูกหรือมะเร็งปากมดลูก,มะเร็งรังไข่,มะเร็งลำไส้,มะเร็งจอตา,มะเร็งเม็ดเลือดขาว]
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 2.5',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti2('มะเร็งจอตา')//[มะเร็งเต้านม,มะเร็งมดลูกหรือมะเร็งปากมดลูก,มะเร็งรังไข่,มะเร็งลำไส้,มะเร็งจอตา,มะเร็งเม็ดเลือดขาว]
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 2.6',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti2('มะเร็งเม็ดเลือดขาว')//[มะเร็งเต้านม,มะเร็งมดลูกหรือมะเร็งปากมดลูก,มะเร็งรังไข่,มะเร็งลำไส้,มะเร็งจอตา,มะเร็งเม็ดเลือดขาว]
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 3.1',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti3('1','1','1')
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('mti Question 3.2',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti3('21','1','1')
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 3.3',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti3('1','11','1')
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 3.4',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti3('1','1','11')
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 4.1',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti4('1')//[เนื้องอก,ก้อนเนื้อ,ตุ่มเนื้อ]//[1 เดือน,6 เดือน,3 เดือน,1 ปี หรือ มากกว่า]
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 4.2',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti4('2','เนื้องอก','3')//[เนื้องอก,ก้อนเนื้อ,ตุ่มเนื้อ]//[1 เดือน,6 เดือน,3 เดือน,1 ปี หรือ มากกว่า]
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 4.3',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti4('2','ก้อนเนื้อ','4')//[เนื้องอก,ก้อนเนื้อ,ตุ่มเนื้อ]//[1 เดือน,6 เดือน,3 เดือน,1 ปี หรือ มากกว่า]
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 4.4',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti4('2','ตุ่มเนื้อ','5')//[เนื้องอก,ก้อนเนื้อ,ตุ่มเนื้อ]//[1 เดือน,6 เดือน,3 เดือน,1 ปี หรือ มากกว่า]
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('mti Question 4.5',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti4('3','1 เดือน','1')//[เนื้องอก,ก้อนเนื้อ,ตุ่มเนื้อ]//[1 เดือน,6 เดือน,3 เดือน,1 ปี หรือ มากกว่า]
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 4.6',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti4('3','6 เดือน','1')
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 4.7',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti4('3','3 เดือน','1')
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('mti Question 4.8',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti4('3','1 ปี หรือ มากกว่า','1')
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('mti Question 4.9',()=>{
    //     buy_mti()
    //     fillinfo()
    //     question_mti4('3','-1','0')
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })




    // it('bki Question 1.1',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki1('bki',600000)
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 1.1',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki1('mti',600000)
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('bki Question 1.1',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki1('tni',600000)
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('bki Question 2.1',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki2('มะเร็งมดลูกหรือมะเร็งปากมดลูก')
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 2.2',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki2('มะเร็งเต้านม')//[มะเร็งเต้านม,มะเร็งมดลูกหรือมะเร็งปากมดลูก,มะเร็งรังไข่,มะเร็งลำไส้,มะเร็งต่อมลูกหมาก]
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 2.3',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki2('มะเร็งรังไข่')//[มะเร็งเต้านม,มะเร็งมดลูกหรือมะเร็งปากมดลูก,มะเร็งรังไข่,มะเร็งลำไส้,มะเร็งต่อมลูกหมาก]
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 2.4',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki2('มะเร็งลำไส้')//[มะเร็งเต้านม,มะเร็งมดลูกหรือมะเร็งปากมดลูก,มะเร็งรังไข่,มะเร็งลำไส้,มะเร็งต่อมลูกหมาก]
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 2.5',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki2('มะเร็งต่อมลูกหมาก')//[มะเร็งเต้านม,มะเร็งมดลูกหรือมะเร็งปากมดลูก,มะเร็งรังไข่,มะเร็งลำไส้,มะเร็งต่อมลูกหมาก]
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 3.1',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki3('1')
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('bki Question 3.2',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki3('2')
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 3.3',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki3('3')
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('bki Question 4.1',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki4('สูบบุหรี่ไม่เกิน 5 มวนต่อวัน')
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 4.2',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki4('สูบบุหรี่ไม่เกิน 10 มวนต่อวัน')
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 4.3',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki4('สูบบุหรี่ 11 มวน ถึง 20 มวนต่อวัน')
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 5.1',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('โรคความดันโลหิตสูง')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 5.2',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('โรคปอด')
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')    
    // })
    // it('bki Question 5.3',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('โรคไวรัสตับอักเสบ B')   
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 5.4',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('โรคไวรัสตับอักเสบ C')   
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 5.5',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('ซีสต์ชนิดถุงน้ำ')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 5.6',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('ซีสต์ชนิดก้อนเนื้อ, เนื้องอก, มะเร็ง')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 5.7',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('โรคเบาหวาน')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 5.8',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('โรคตับ')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 5.9',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('โรคภูมิคุ้มกันบกพร่องหรือเอดส์')   
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 5.10',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('โรคเกี่ยวกับทางเดินปัสสาวะและระบบสืบพันธุ์')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 5.11',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('โรค SLE')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 5.12',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('โรคเลือด')  
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 5.13',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('โรคเกี่ยวกับต่อมไทรอยด์หรือต่อมไร้ท่ออื่นๆ')   
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 5.14',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('โรคเกี่ยวกับระบบทางเดินอาหาร')     
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 5.15',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('โรคพิษสุราเรื้อรัง')     
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 5.16',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki5('other')     
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('bki Question 6.1',()=>{
    //     buy_bki()
    //     fillinfo()
    //     question_bki6()     
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    
    
    
    
    
    // it('tni Question 1.1',()=>{
    //     buy_tni(500000)
    //     fillinfo()
    //     question_tni1('bki',600000)    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question 1.2',()=>{
    //     buy_tni(500000)
    //     fillinfo()
    //     question_tni1('mti',600000)    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question 1.3',()=>{
    //     buy_tni(500000)
    //     fillinfo()
    //     question_tni1('tni',600000)    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question ชาย 2.1.1',()=>{
    //     buy_tni(200000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งเต้านม')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question ชาย 2.1.2',()=>{
    //     buy_tni(200000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งรังไข่')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question ชาย 2.1.3',()=>{
    //     buy_tni(200000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งลำไส้')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question ชาย 2.1.4',()=>{
    //     buy_tni(200000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งเม็ดเลือดขาว')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question ชาย 2.1.5',()=>{
    //     buy_tni(200000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งจอตา')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question ชาย 2.1.6',()=>{
    //     buy_tni(200000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งมดลูกหรือมะเร็งปากมดลูก')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question ชาย 2.2.1',()=>{
    //     buy_tni(500000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งเต้านม')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question ชาย 2.2.2',()=>{
    //     buy_tni(500000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งรังไข่')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question ชาย 2.2.3',()=>{
    //     buy_tni(500000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งลำไส้')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question ชาย 2.2.4',()=>{
    //     buy_tni(500000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งเม็ดเลือดขาว')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question ชาย 2.2.5',()=>{
    //     buy_tni(500000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งจอตา')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question ชาย 2.2.6',()=>{
    //     buy_tni(500000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งมดลูกหรือมะเร็งปากมดลูก')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question ชาย 2.3.1',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งเต้านม')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question ชาย 2.3.3',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งรังไข่')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question ชาย 2.3.3',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งลำไส้')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question ชาย 2.3.4',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งเม็ดเลือดขาว')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question ชาย 2.3.5',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งจอตา')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question ชาย 2.3.6',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('mr')
    //     question_tni2('มะเร็งมดลูกหรือมะเร็งปากมดลูก')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question หญิง 2.1.1',()=>{
    //     buy_tni(200000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งเต้านม')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question หญิง 2.1.2',()=>{
    //     buy_tni(200000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งรังไข่')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question หญิง 2.1.3',()=>{
    //     buy_tni(200000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งลำไส้')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question หญิง 2.1.4',()=>{
    //     buy_tni(200000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งเม็ดเลือดขาว')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question หญิง 2.1.5',()=>{
    //     buy_tni(200000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งจอตา')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question หญิง 2.1.6',()=>{
    //     buy_tni(200000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งมดลูกหรือมะเร็งปากมดลูก')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question หญิง 2.2.1',()=>{
    //     buy_tni(500000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งเต้านม')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question หญิง 2.2.2',()=>{
    //     buy_tni(500000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งรังไข่')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question หญิง 2.2.3',()=>{
    //     buy_tni(500000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งลำไส้')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question หญิง 2.2.4',()=>{
    //     buy_tni(500000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งเม็ดเลือดขาว')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question หญิง 2.2.5',()=>{
    //     buy_tni(500000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งจอตา')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question หญิง 2.2.6',()=>{
    //     buy_tni(500000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งมดลูกหรือมะเร็งปากมดลูก')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question หญิง 2.3.1',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งเต้านม')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question หญิง 2.3.3',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งรังไข่')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question หญิง 2.3.4',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งลำไส้')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question หญิง 2.3.5',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งเม็ดเลือดขาว')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question หญิง 2.3.6',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งจอตา')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question หญิง 2.3.7',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('ms')
    //     question_tni2('มะเร็งมดลูกหรือมะเร็งปากมดลูก')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question นาง 2.1.1',()=>{
    //     buy_tni(200000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งเต้านม')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question นาง 2.1.2',()=>{
    //     buy_tni(200000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งรังไข่')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question นาง 2.1.3',()=>{
    //     buy_tni(200000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งลำไส้')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question นาง 2.1.4',()=>{
    //     buy_tni(200000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งเม็ดเลือดขาว')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question นาง 2.1.5',()=>{
    //     buy_tni(200000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งจอตา')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question นาง 2.1.6',()=>{
    //     buy_tni(200000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งมดลูกหรือมะเร็งปากมดลูก')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question นาง 2.2.1',()=>{
    //     buy_tni(500000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งเต้านม')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question นาง 2.2.2',()=>{
    //     buy_tni(500000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งรังไข่')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question นาง 2.2.3',()=>{
    //     buy_tni(500000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งลำไส้')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question นาง 2.2.4',()=>{
    //     buy_tni(500000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งเม็ดเลือดขาว')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question นาง 2.2.5',()=>{
    //     buy_tni(500000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งจอตา')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question นาง 2.2.6',()=>{
    //     buy_tni(500000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งมดลูกหรือมะเร็งปากมดลูก')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question นาง 2.3.1',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งเต้านม')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question นาง 2.3.3',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งรังไข่')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question นาง 2.3.4',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งลำไส้')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question นาง 2.3.5',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งเม็ดเลือดขาว')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question นาง 2.3.6',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งจอตา')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    // it('tni Question นาง 2.3.7',()=>{
    //     buy_tni(1000000)
    //     fillinfotni('mrs')
    //     question_tni2('มะเร็งมดลูกหรือมะเร็งปากมดลูก')    
    //     cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    // })
    
    // it('tni Question นาย 3.1.1',()=>{
    //     buy_tni(200000)
    //     fillinfotni('mr')
    //     question_tni3('0')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    // it('tni Question นาย 3.1.2',()=>{
    //     buy_tni(200000)
    //     fillinfotni('mr')
    //     question_tni3('1')    
    //     cy.contains('ข้อมูลผู้ซื้อประกัน')
    // })
    it('tni Question นาย 3.1.3',()=>{
        buy_tni(200000)
        fillinfotni('mr')
        question_tni3('2')    
        cy.contains('ข้อมูลผู้ซื้อประกัน')
    })
    it('tni Question นาย 3.2.1',()=>{
        buy_tni(500000)
        fillinfotni('mr')
        question_tni3('0')
        cy.contains('ข้อมูลผู้ซื้อประกัน')    
    })
    it('tni Question นาย 3.2.2',()=>{
        buy_tni(500000)
        fillinfotni('mr')
        question_tni3('1')    
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question นาย 3.2.3',()=>{
        buy_tni(500000)
        fillinfotni('mr')
        question_tni3('2')    
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question นาย 3.3.1',()=>{
        buy_tni(1000000)
        fillinfotni('mr')
        question_tni3('0')    
        cy.contains('ข้อมูลผู้ซื้อประกัน')
    })
    it('tni Question นาย 3.3.2',()=>{
        buy_tni(1000000)
        fillinfotni('mr')
        question_tni3('1')    
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question นาย 3.3.3',()=>{
        buy_tni(1000000)
        fillinfotni('mr')
        question_tni3('2')    
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question นางสาว 3.1.1',()=>{
        buy_tni(200000)
        fillinfotni('mrs')
        question_tni3('0')    
        cy.contains('ข้อมูลผู้ซื้อประกัน')
    })
    it('tni Question นางสาว 3.1.2',()=>{
        buy_tni(200000)
        fillinfotni('mrs')
        question_tni3('1')    
        cy.contains('ข้อมูลผู้ซื้อประกัน')
    })
    it('tni Question นางสาว 3.1.3',()=>{
        buy_tni(200000)
        fillinfotni('mrs')
        question_tni3('2')    
        cy.contains('ข้อมูลผู้ซื้อประกัน')
    })
    it('tni Question นางสาว 3.2.1',()=>{
        buy_tni(500000)
        fillinfotni('mrs')
        question_tni3('0')
        cy.contains('ข้อมูลผู้ซื้อประกัน')    
    })
    it('tni Question นางสาว 3.2.2',()=>{
        buy_tni(500000)
        fillinfotni('mrs')
        question_tni3('1')    
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question นางสาว 3.2.3',()=>{
        buy_tni(500000)
        fillinfotni('mrs')
        question_tni3('2')    
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question นางสาว 3.3.1',()=>{
        buy_tni(1000000)
        fillinfotni('mrs')
        question_tni3('0')    
        cy.contains('ข้อมูลผู้ซื้อประกัน')
    })
    it('tni Question นางสาว 3.3.2',()=>{
        buy_tni(1000000)
        fillinfotni('mrs')
        question_tni3('1')    
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question นางสาว 3.3.3',()=>{
        buy_tni(1000000)
        fillinfotni('mrs')
        question_tni3('2')    
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question นาง 3.1.1',()=>{
        buy_tni(200000)
        fillinfotni('ms')
        question_tni3('0')    
        cy.contains('ข้อมูลผู้ซื้อประกัน')
    })
    it('tni Question นาง 3.1.2',()=>{
        buy_tni(200000)
        fillinfotni('ms')
        question_tni3('1')    
        cy.contains('ข้อมูลผู้ซื้อประกัน')
    })
    it('tni Question นาง 3.1.3',()=>{
        buy_tni(200000)
        fillinfotni('ms')
        question_tni3('2')    
        cy.contains('ข้อมูลผู้ซื้อประกัน')
    })
    it('tni Question นาง 3.2.1',()=>{
        buy_tni(500000)
        fillinfotni('ms')
        question_tni3('0')
        cy.contains('ข้อมูลผู้ซื้อประกัน')    
    })
    it('tni Question นาง 3.2.2',()=>{
        buy_tni(500000)
        fillinfotni('ms')
        question_tni3('1')    
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question นาง 3.2.3',()=>{
        buy_tni(500000)
        fillinfotni('ms')
        question_tni3('2')    
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question นาง 3.3.1',()=>{
        buy_tni(1000000)
        fillinfotni('ms')
        question_tni3('0')    
        cy.contains('ข้อมูลผู้ซื้อประกัน')
    })
    it('tni Question นาง 3.3.2',()=>{
        buy_tni(1000000)
        fillinfotni('ms')
        question_tni3('1')    
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question นาง 3.3.3',()=>{
        buy_tni(1000000)
        fillinfotni('ms')
        question_tni3('2')    
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })

    it('tni Question 4.1',()=>{
        buy_tni(500000)
        fillinfo()
        question_tni4('โรคไวรัสตับอักเสบ B, C (ไม่ว่าจะเป็นพาหะหรือเคยเป็น)')
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question 4.2',()=>{
        buy_tni(500000)
        fillinfo()
        question_tni4('โรคเอดส์ หรือมีเลือดบวกต่อไวรัส HIV')
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question 4.3',()=>{
        buy_tni(500000)
        fillinfo()
        question_tni4('โรคมะเร็ง')
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question 4.4',()=>{
        buy_tni(500000)
        fillinfo()
        question_tni4('ปอดอักเสบเรื้อรัง')
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question 4.5',()=>{
        buy_tni(500000)
        fillinfo()
        question_tni4('ตับแข็ง ตับอักเสบ')
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question 4.6',()=>{
        buy_tni(500000)
        fillinfo()
        question_tni4('ลำไส้ใหญ่อักเสบเรื้อรัง')
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question 4.7',()=>{
        buy_tni(500000)
        fillinfo()
        question_tni4('เนื้องอก ก้อนเนื้อ ตุ่มเนื้อ ชีสต์')
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
    it('tni Question 4.8',()=>{
        buy_tni(500000)
        fillinfo()
        question_tni4('ปากมดลูก หรือ ช่องคลอดอักเสบเรื้อรัง')
        cy.contains('ขอบคุณค่ะ เจ้าหน้าที่จะทำการติดต่อกลับเพื่อสอบถามข้อมูลเพิ่มเติม')
    })
})//6.1 4.3 4.2 4.1 3.1 3.2