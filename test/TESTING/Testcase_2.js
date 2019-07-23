function Motor(s){
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
function SelectMotor(Manufacturer,Model,Year,Plate){
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
        cy.get('.mfp-close').click()
}
function ChangeInsuranMotor(i){ //เลือกผู้ให้ประกัน
    var insuran = ['-1','#AIG','#TIP','#SAFE','#AXA','#MSIG','#MTI','#ASIA']
    cy.get('#all_insurers').click({force: true})
    cy.get(insuran[i]).click({force: true})
    cy.get('#motor_filter_button').click({force: true})
}
function Checkplan(){
        cy.get('strong').then(($tem) =>{
        var plan = $tem.text()
        var sumplan = parseInt(plan, 10);
        if(sumplan == 2){
         CheckPrice()
        }
    })
}
function Plan1(){
    cy.get(':nth-child(1) > .motor-plan-item > .motor-plan--content > .label-list > :nth-child(1) > .list--value').then(($btn) =>{
        var SumInsured = $btn.text()
        var S = SumInsured.replace(/,/g,'');
        SumInsured = parseInt(S, 10);
            
            if(SumInsured >200000 && SumInsured < 450000){
                cy.contains('15,900')
            }
            if(SumInsured >450001 && SumInsured < 650000){
                cy.contains('16,800')
            }
            if(SumInsured >650001 && SumInsured < 850000){
                cy.contains('17,700')
            }
            if(SumInsured >850001 && SumInsured < 1000000){
                cy.contains('18,200')
            }
            if(SumInsured >1000001 && SumInsured < 1200000){
                cy.contains('18,700')
            }
            if(SumInsured >1200001 && SumInsured < 1500000){
                cy.contains('19,200')
            }
        })
}
function Plan2(){
    cy.get(':nth-child(2) > .motor-plan-item > .motor-plan--content > .label-list > :nth-child(1) > .list--value').then(($btn) =>{
        var SumInsured = $btn.text()
        var S = SumInsured.replace(/,/g,'');
        SumInsured = parseInt(S, 10);
           
            if(SumInsured >200000 && SumInsured < 450000){
                cy.contains('21,500')
            }
            if(SumInsured >450001 && SumInsured < 650000){
                cy.contains('22,500')
            }
            if(SumInsured >650001 && SumInsured < 850000){
                cy.contains('23,500')
            }
            if(SumInsured >850001 && SumInsured < 1000000){
                cy.contains('24,500')
            }
            if(SumInsured >1000001 && SumInsured < 1200000){
                cy.contains('25,500')
            }
            if(SumInsured >1200001 && SumInsured < 1500000){
                cy.contains('26,200')
            }
        })
}
function Plan3(){
    cy.get(':nth-child(1) > .motor-plan-item > .motor-plan--content > .label-list > :nth-child(1) > .list--value').then(($btn) =>{
        var SumInsured = $btn.text()
        var S = SumInsured.replace(/,/g,'');
        SumInsured = parseInt(S, 10);
           
           if(SumInsured >200000 && SumInsured < 450000){
                cy.contains('17,500')
            }
            if(SumInsured >450001 && SumInsured < 650000){
                cy.contains('18,300')
            }
            if(SumInsured >650001 && SumInsured < 850000){
                cy.contains('19,000')
            }
            if(SumInsured >850001 && SumInsured < 1000000){
                cy.contains('19,500')
            } 
            
        })
}
function Plan4(){
    cy.get(':nth-child(2) > .motor-plan-item > .motor-plan--content > .label-list > :nth-child(1) > .list--value').then(($btn) =>{
        var SumInsured = $btn.text()
        var S = SumInsured.replace(/,/g,'');
        SumInsured = parseInt(S, 10);
         
            if(SumInsured >260000 && SumInsured < 450000){
                cy.contains('23,000')
            }
            if(SumInsured >450001 && SumInsured < 650000){
                cy.contains('23,500')
            }
            if(SumInsured >650001 && SumInsured < 850000){
                cy.contains('24,000')
            }
            if(SumInsured >850001 && SumInsured < 1000000){
                cy.contains('24,500')
            }  
        })
}
function Plan5(){
    cy.get(':nth-child(1) > .motor-plan-item > .motor-plan--content > .label-list > :nth-child(1) > .list--value').then(($btn) =>{
        var SumInsured = $btn.text()
        var S = SumInsured.replace(/,/g,'');
        SumInsured = parseInt(S, 10);
            
            if(SumInsured >100000 && SumInsured < 300000){
                cy.contains('14,700')
            }
            if(SumInsured >300001 && SumInsured < 450000){
                cy.contains('15,700')
            }
            if(SumInsured >450001 && SumInsured < 600000){
                cy.contains('16,500')
            }
            if(SumInsured >600001 && SumInsured < 750000){
                cy.contains('17,000')
            }      
        })
}
function Plan6(){
    cy.get(':nth-child(2) > .motor-plan-item > .motor-plan--content > .label-list > :nth-child(1) > .list--value').then(($btn) =>{
        var SumInsured = $btn.text()
        var S = SumInsured.replace(/,/g,'');
        SumInsured = parseInt(S, 10);
        
            if(SumInsured >100000 && SumInsured < 300000){
                cy.contains('22,000')
            }
            if(SumInsured >300001 && SumInsured < 450000){
                cy.contains('22,500')
            }
            if(SumInsured >450001 && SumInsured < 600000){
                cy.contains('23,000')
            }
            if(SumInsured >600001 && SumInsured < 750000){
                cy.contains('23,500')
            }
        })
}
function CheckPrice(Plan){
        if (Plan == 1){
            cy.get('strong').contains('1')
            Plan1()
        }        
        if (Plan == 2){
            cy.get('strong').contains('2')
            Plan1()
            Plan2()
        }
        if (Plan == 3){
            cy.get('strong').contains('1')
            Plan3()
        }
        if (Plan == 4){
            cy.get('strong').contains('2')
            Plan3()
            Plan4()
        }
        if (Plan == 5){
            cy.get('strong').contains('1')
            Plan5()
        }
        if (Plan == 6){
            cy.get('strong').contains('2')
            Plan5()
            Plan6()
        }
}
    describe('validate Safety Package 1 Group 4 ', () => {
        beforeEach(() => {
            cy.viewport(1280, 900)
            cy.visit('http://staging.gettgo.com')

    })
        it('tc_SAFE_033 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Chevrolet','Cruze (2000cc)','2015','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(4)
        })
        it('tc_SAFE_034 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Chevrolet','Cruze (2000cc)','2014','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(3)
        })
        it('tc_SAFE_035 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Chevrolet','Optra (1600cc)','2005','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(3)
        })
        it('tc_SAFE_036 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Chevrolet','Optra (1600cc)','2004','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            cy.contains('ไม่พบแผนประกันที่ตรงกับที่คุณต้องการ')
        })
        it('tc_SAFE_037 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Ford','EcoSport (1500cc)','2015','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(4)
        })
        it('tc_SAFE_038 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Ford','EcoSport (1500cc)','2014','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(3)
        })
        it('tc_SAFE_039 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Mitsubishi','Lancer EX (2000cc)','2015','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(4)
        })
        it('tc_SAFE_040 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Mitsubishi','Lancer EX (2000cc)','2014','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(3)
        })
        it('tc_SAFE_041 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Mitsubishi','Lancer (1600cc)','2005','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(3)
        })
        it('tc_SAFE_042 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Mitsubishi','Lancer (1600cc)','2004','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(4)
            cy.contains('ไม่พบแผนประกันที่ตรงกับที่คุณต้องการ')

        })
        it('tc_SAFE_043 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Mitsubishi','Strada G-Wagon (2900cc)','2005','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(3)
        })
        it('tc_SAFE_044 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Mitsubishi','Strada G-Wagon (2900cc)','2004','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            cy.contains('ไม่พบแผนประกันที่ตรงกับที่คุณต้องการ')
        })
        it('tc_SAFE_045 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Nissan','Sylphy (1600cc)','2015','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(4)
        })
        it('tc_SAFE_046 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Nissan','Sylphy (1600cc)','2010','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(3)
        })
        it('tc_SAFE_047 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Suzuki','Ertiga (1400cc)','2015','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(4)
        })
        it('tc_SAFE_048 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Suzuki','Ertiga (1400cc)','2014','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(3)
        })
        it('tc_SAFE_049 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Suzuki','SX4 (1600cc)','2014','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(3)
        })
        it('tc_SAFE_050 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Suzuki','APV (1600cc)','2005','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(3)
        })
        it('tc_SAFE_051 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Toyota','Corolla Altis (1800cc)','2015','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(4)
        })
        it('tc_SAFE_052 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Toyota','Corolla Altis (1800cc)','2005','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(3)
        })
        it('tc_SAFE_053 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Toyota','Corolla Altis (1800cc)','2004','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            cy.contains('ไม่พบแผนประกันที่ตรงกับที่คุณต้องการ')
        })
        it('tc_SAFE_054 > ซื้อแพ็คเกจ motor (1)', () => {
            Motor('1')
            SelectMotor('Toyota','Sienta (1500cc)','2018','กรุงเทพมหานคร')
            ChangeInsuranMotor(3)
            CheckPrice(4)
        })
})