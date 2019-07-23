function login () {
    cy.get('.hidden-xs > .list-unstyled > .hl-menu > a').click()
    cy.get('#user_email').type('blackblackmaster@gmail.com')
    cy.get('#user_password').type('123456789')
    cy.get('#user_password').type('{enter}')
  }

function FillCustomerInformations(){
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

function FillCreditCard(){

    cy.get('#cboCardType').then(function($select){
        $select.val('V')
    })
    cy.get('#txtCreditCard1').type('4987')
    cy.get('#txtCreditCard2').type('6543')
    cy.get('#txtCreditCard3').type('2109')
    cy.get('#txtCreditCard4').type('8769')
    cy.get('#txtCVV').type('111')

    cy.get('#cboMonth').then(function($select){
        $select.val('05')
    })
    cy.get('#cboYear').then(function($select){
        $select.val('2021')
    })
    cy.get('#txtCHName').then(function($select){
        $select.val('TEST GETTGO')
    })

    cy.get('#cboBank').then(function($select){
        $select.val('Kasikornbank Public Company Limited')
    })    

    //#cboBank
    cy.get('#imgPayNow1').click()
    
    cy.get('[name="cmdContinue"]').click()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });    
}

function genLicensePlate() {
    const title = 'กข'
    const fourDigit = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    const licensePlate = title+fourDigit
    console.log(licensePlate);

    return licensePlate
}

function genVehicleModelNumber() {
    var modelNumber = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (var i = 0; i < 17; i++)
    modelNumber += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return modelNumber;
  }



describe('Purchase TA Package and Vehical Plan ', () => {
    beforeEach(() => {
        cy.viewport(1280, 900)
        cy.visit('http://staging.gettgo.com')

    })

    it('tc_piccr_003 > ซื้อแพ็คเกจ motor (2+) โดยการจ่ายบัตรเครดิตได้สำเร็จ ', () => {
        login()
        cy.get('#motor_tab').click()

        cy.get('.first > .css-label').click() //uncheck 1
        cy.get(':nth-child(3) > .css-label').click() //uncheck 3
        cy.get(':nth-child(4) > .css-label').click() //uncheck 3+
        
        // Select Car Model

        cy.get('#manufacturer').then(function($select){
            $select.val('Toyota').trigger('change', { force: true })
        })

        cy.get('#model').then(function($select){
            $select.val('Camry (2000cc)').trigger('change', { force: true })
        })

        cy.get('#year').then(function($select){
            $select.val('2017').trigger('change', { force: true })
        })
        cy.get('#search_motor').click()
        cy.get('.mfp-close').click()

        cy.get(':nth-child(1) > .motor-plan-item > .motor-plan--content > .motor-plan--button > :nth-child(2) > .btn').click()   //Pick Pane 1st
        

        cy.get('#payer_birthday_3i').then(function($select){
            $select.val('9')
        })
    
        cy.get('#payer_birthday_2i').then(function($select){
            $select.val('11')
        })
        
        cy.get('#payer_birthday_1i').then(function($select){
            $select.val('2535')
        })


        cy.get(':nth-child(8) > :nth-child(1) > .col-sm-8 > .form-control').clear().type('999/99 Muangthai Broker')


        cy.get('#payer_province').then(function($select){
            $select.val('สิงห์บุรี').trigger('change', { force: true })
        })

        cy.get('#payer_district').then(function($select){
            $select.val('ท่าช้าง').trigger('change', { force: true })
            
        })
    
        cy.get('#payer_subdistrict').then(function($select){
            $select.val('ถอนสมอ').trigger('change', { force: true })
            
        })

        cy.get('#motor_check_payer_info').click()

        cy.get('#step-2 > .form-group-content > :nth-child(1) > .col-sm-8 > .form-control').type(genLicensePlate())
        cy.get('.with-icon > .col-sm-8 > .form-control').type(genVehicleModelNumber())

        cy.get('.form-footer-note > .checkbox > .css-label').click()

        cy.get('#motor_check_vehicle_info').click()
        cy.get('#motor_info_confirmed').click()

        cy.get('#credit_card > .payment-action-block > .btn').click()
        FillCreditCard()  
    
    })


    // it('tc_piccr_004 > ซื้อแพ็คเกจ motor (2+ monthly) โดยการจ่ายบัตรเครดิตได้สำเร็จ ', () => {
    //     login()

    //     cy.get('#motor_tab').click()

    //     cy.get('#tier-checkbox-group > .btn-group > .btn').click()

    //     cy.get('#manufacturer_monthly').then(function($select){
    //         $select.val('Toyota').trigger('change', { force: true })
    //     })
        
    //     cy.get('#model_monthly').then(function($select){
    //         $select.val('Camry (2000cc)').trigger('change', { force: true })
    //     })
        
    //     cy.get('#year_monthly').then(function($select){
    //         $select.val('2017').trigger('change', { force: true })
    //     })        

    //     cy.get('#search_motor_monthly').click()

        

    //     // Select Car Model

        
    //     cy.get('.mfp-close').click()  //close popup sub model

    //     cy.get(':nth-child(1) > .motor-plan-item > .motor-plan--content > .motor-plan--button > :nth-child(2) > .btn').click()   //Pick Pane 1st
        

    //     cy.get('#payer_birthday_3i').then(function($select){
    //         $select.val('9')
    //     })
    
    //     cy.get('#payer_birthday_2i').then(function($select){
    //         $select.val('11')
    //     })
        
    //     cy.get('#payer_birthday_1i').then(function($select){
    //         $select.val('2535')
    //     })


    //     cy.get(':nth-child(8) > :nth-child(1) > .col-sm-8 > .form-control').clear().type('999/99 Muangthai Broker')


    //     cy.get('#payer_province').then(function($select){
    //         $select.val('สิงห์บุรี').trigger('change', { force: true })
    //     })

    //     cy.get('#payer_district').then(function($select){
    //         $select.val('ท่าช้าง').trigger('change', { force: true })
            
    //     })
    
    //     cy.get('#payer_subdistrict').then(function($select){
    //         $select.val('ถอนสมอ').trigger('change', { force: true })
            
    //     })

    //     cy.get('#motor_check_payer_info').click()



    //     cy.get('#step-2 > .form-group-content > :nth-child(1) > .col-sm-8 > .form-control').type(genLicensePlate())
    //     cy.get('.with-icon > .col-sm-8 > .form-control').type(genVehicleModelNumber())

    //     cy.get('.form-footer-note > .checkbox > .css-label').click()

    //     cy.get('#motor_check_vehicle_info').click()
    //     cy.get('#motor_info_confirmed').click()

    //     cy.get('#credit_card > .payment-action-block > .btn').click()

    //     FillCreditCard()  



    
    // })


 })