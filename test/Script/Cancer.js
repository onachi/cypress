function Buycancer(age,Sum_insured){
    cy.get('#insurance_tabs > :nth-child(4) > a').click()
    cy.get('#age').then(function($select){$select.val(Age)})
    cy.get('#cancer_sum_insured').then(function($select){$select.val(Sum_insured)})
    cy.get('#cancer_property').click()
}
function CheckpriceMTI(age,s,p){
    if(p=='' || p == '0,000') return false
    var x = checkprice(age,s,'mti')
    cy.log('MTI',x)
    // var x
    // if(s==200000 || s == 500000 || s == 1000000) x=2
    // else x=3

    var ss = (s*0.20).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    s=s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    cy.get('.motor-plan--price-drop > span').contains(p)
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child('+x+') > .math-height').contains(s)
    cy.get(':nth-child(2) > :nth-child('+x+') > .math-height').contains(s)
    cy.get(':nth-child(3) > :nth-child('+x+') > .math-height').contains(ss)
}
function CheckpriceBKI(age,s,p){
    if(p=='' || p == '0,000') return false
    var x = checkprice(age,s,'bki')
    cy.log('BKI',x)
    // var x 
    // if(s==200000 || s == 500000 || s == 1000000) x=3
    // else x=4

    s=s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    cy.get('.motor-plan--price-drop > span').contains(p)
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child('+x+') > .math-height').contains(s)
    cy.get(':nth-child(2) > :nth-child('+x+') > .math-height').contains('ไม่คุ้มครอง')
    cy.get(':nth-child(3) > :nth-child('+x+') > .math-height').contains('ไม่คุ้มครอง')

}
function CheckpriceTNI(age,s,p){
    if(p=='' || p == '0,000') return false
    var x = checkprice(age,s,'tni')
    cy.log('TNI',x)
    var ss = (s*0.20).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    s = s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    cy.get('.motor-plan--price-drop > span').contains(p)
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child('+x+') > .math-height').contains(s)
    cy.get(':nth-child(2) > :nth-child('+x+') > .math-height').contains(s)
    cy.get(':nth-child(3) > :nth-child('+x+') > .math-height').contains(ss)
}
function checkprice(age,s,type){

    var bki 
    var tni 
    var mti

    if(age == '1'||age == '2'||age == '3'|| age == '4'|| age == '5'|| age == '6'|| age == '7'|| age == '8'|| age == '9'){
        tni =2 
        return tni }  
    if(age == '36' || age == '37'|| age == '38' || age == '39'){
        bki = 2 ,mti =3 
        if(s==200000 || s == 500000 || s == 1000000){
        bki = 2 ,tni = 3 , mti = 4
        if(s==300000){ 
        mti = 2 ,bki=3
        }}}
     if(age == '45'|| age =='46' || age == '47' || age =='48' || age == '49'){
        mti = 2, bki =3
        if(s== 900000) bki=2, mti=3
        if(s==200000 || s == 500000 || s == 1000000){
        tni = 2, mti =3 ,bki =4
        }}
    else if(s==200000 || s == 500000 || s == 1000000) bki = 2, tni = 3 ,mti = 4 
    else bki = 2 ,mti = 3 

    if(type == 'mti') return mti
    if(type == 'bki') return bki
    if(type == 'tni') return tni

}
describe('validate price cancer',() =>{
    beforeEach(() => {
        cy.visit('http://alpha.gettgo.com/')
        cy.viewport(1280, 900)
    })

    it('Testcase  Price Age:8  Sum_insured: 200000 ' ,()=>{
        var value =	[	'8',	'200000',	'1,235',	'0,000',	'0,000'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age: 7 Sum_insured: 500000' ,()=>{
        var value =	[	'7',	'500000',	'3,090',	'0,000',	'0,000'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:9  Sum_insured: 1000000' ,()=>{
        var value =	[	'9',	'1000000',	'6,180',	'0,000',	'0,000'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age: 10 Sum_insured: 100000' ,()=>{
        var value =	[	'10',	'100000',	'0,000',	'450',	'0,000'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:11  Sum_insured:200000' ,()=>{
        var value =	[	'11',	'200000',	'1,235',	'910',	'0,000'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age: 12 Sum_insured: 300000' ,()=>{
        var value =	[	'12',	'300000',	'0,000',	'1,370',	'0,000'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:13  Sum_insured:400000 ' ,()=>{
        var value =	[	'13',	'400000',	'0,000',	'1,820',	'0,000'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:14  Sum_insured: 500000' ,()=>{
        var value =	[	'14',	'500000',	'3,090',	'2,280',	'0,000'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age: 10 Sum_insured: 600000' ,()=>{
        var value =	[	'10',	'600000',	'0,000',	'2,730',	'0,000'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:11  Sum_insured: 700000' ,()=>{
        var value =	[	'11',	'700000',	'0,000',	'3,190',	'0,000'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age: 12 Sum_insured: 800000' ,()=>{
        var value =	[	'12',	'800000',	'0,000',	'3,660',	'0,000'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:13  Sum_insured:900000 ' ,()=>{
        var value =	[	'13',	'900000',	'0,000',	'4,100',	'0,000'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:14  Sum_insured:1000000 ' ,()=>{
        var value =	[	'14',	'1000000',	'6,180',	'4,560',	'0,000'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:15  Sum_insured:100000 ' ,()=>{
        var value =	[	'15',	'100000',	'0,000',	'450',	'936'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:16  Sum_insured:200000 ' ,()=>{
        var value =	[	'16',	'200000',	'1,235',	'910',	'1,870'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:17  Sum_insured:300000 ' ,()=>{
        var value =	[	'17',	'300000',	'0,000',	'1,370',	'2,653'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:18  Sum_insured:400000 ' ,()=>{
        var value =	[	'18',	'400000',	'0,000',	'1,820',	'3,736'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:19  Sum_insured:500000 ' ,()=>{
        var value =	[	'19',	'500000',	'3,090',	'2,280',	'4,521'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:20  Sum_insured:600000 ' ,()=>{
        var value =	[	'20',	'600000',	'0,000',	'2,730',	'5,716'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:21  Sum_insured:700000 ' ,()=>{
        var value =	[	'21',	'700000',	'0,000',	'3,190',	'6,690'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:22  Sum_insured:800000 ' ,()=>{
        var value =	[	'22',	'800000',	'0,000',	'3,660',	'7,775'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:23  Sum_insured:900000 ' ,()=>{
        var value =	[	'23',	'900000',	'0,000',	'4,100',	'8,860'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:34  Sum_insured:1000000 ' ,()=>{
        var value =	[	'34',	'1000000',	'6,180',	'4,560',	'9,641'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:35  Sum_insured:100000 ' ,()=>{
        var value =	[	'35',	'100000',	'0,000',	'920',	'968'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:36  Sum_insured:200000 ' ,()=>{
        var value =	[	'36',	'200000',	'1,235',	'1,840',	'1,935'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:37  Sum_insured:300000 ' ,()=>{
        var value =	[	'37',	'300000',	'0,000',	'2,760',	'2,743'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:38  Sum_insured:400000 ' ,()=>{
        var value =	[	'38',	'400000',	'0,000',	'3,680',	'3,866'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:39  Sum_insured:500000 ' ,()=>{
        var value =	[	'39',	'500000',	'3,090',	'4,600',	'4,676'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:35  Sum_insured:600000' ,()=>{
        var value =	[	'35',	'600000',	'0,000',	'5,520',	'5,913'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:36  Sum_insured:700000 ' ,()=>{
        var value =	[	'36',	'700000',	'0,000',	'6,440',	'6,921'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:37  Sum_insured:800000 ' ,()=>{
        var value =	[	'37',	'800000',	'0,000',	'7,360',	'8,042'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:38  Sum_insured:900000 ' ,()=>{
        var value =	[	'38',	'900000',	'0,000',	'8,280',	'9,166'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:39  Sum_insured:1000000 ' ,()=>{
        var value =	[	'39',	'1000000',	'6,180',	'9,200',	'9,973'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:40  Sum_insured:100000 ' ,()=>{
        var value =	[	'40',	'100000',	'0,000',	'920',	'1,293'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:40  Sum_insured:200000 ' ,()=>{
        var value =	[	'40',	'200000',	'1,890',	'1,840',	'2,582'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:41  Sum_insured:300000 ' ,()=>{
        var value =	[	'41',	'300000',	'0,000',	'2,760',	'3,663'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:41  Sum_insured:400000 ' ,()=>{
        var value =	[	'41',	'400000',	'0,000',	'3,680',	'5,163'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:42  Sum_insured:500000 ' ,()=>{
        var value =	[	'42',	'500000',	'4,720',	'4,600',	'6,245'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:42  Sum_insured:600000 ' ,()=>{
        var value =	[	'42',	'600000',	'0,000',	'5,520',	'7,954'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:42  Sum_insured:700000 ' ,()=>{
        var value =	[	'42',	'700000',	'0,000',	'6,440',	'9,242'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:43  Sum_insured:800000 ' ,()=>{
        var value =	[	'43',	'800000',	'0,000',	'7,360',	'10,739'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age:43  Sum_insured:900000 ' ,()=>{
        var value =	[	'43',	'900000',	'0,000',	'8,280',	'12,239'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })
    it('Testcase  Price Age: 44 Sum_insured:1000000 ' ,()=>{
        var value =	[	'44',	'1000000',	'9,445',	'9,200',	'13,318'	]
        var age = value[0]
        var sum_insured = value[1]
        Buycancer(age,sum_insured)
        CheckpriceTNI(age,sum_insured,value[2])
        CheckpriceBKI(age,sum_insured,value[3])
        CheckpriceMTI(age,sum_insured,value[4])
    })

})

