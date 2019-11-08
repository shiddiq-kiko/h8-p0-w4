function shoppingTime(memberId, money) {
    // you can only write your code here!
    var sale = {
        Sepatu_Stacattu : 1500000,
        Baju_Zoro : 500000,
        'Baju_H&N' : 250000,
        Sweater_Uniklooh : 175000,
        Casing_Handphone : 50000
    }
    var belanja = {}
    var y = money
    if(memberId === undefined || memberId.length === 0){
        return 'Muhon maaf, toko x hanya berlaku untuk member saja'
    } else if(money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    }
    else {
        belanja['memberId'] = memberId,
        belanja['money'] = money
        var z = []
        for(var x in sale){
                if(y > 0){
                    if((y - sale[x]) >= 0){
                        y -= sale[x]
                        z.push(x)
                        belanja['listPurchased'] = z
                        belanja['changeMoney'] = y
                } 
        }
    }
    return belanja
  }
}
  
  // TEST CASES
  
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    // { memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja