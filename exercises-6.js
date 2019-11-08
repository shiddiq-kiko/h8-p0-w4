function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var x = []
    for(var a = 1; a <= angka; a++){
        for(var b = angka; b > 1; b++){
            if(a*b === angka){
                var y = String(a) + String(b)
                x.push(y)
                
            }
        }
        console.log(x)
    }

  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2