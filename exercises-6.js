function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var x = []
    for(var a = 1; a <= angka; a++){
        for(var b = angka; b > 0; b--){
            if(a*b === angka){
                var y = String(a)
                var z = String(b)
                var n = y + z
                x.push(n)
            }
        }
    }
    x.sort(function(value1, value2)  { return value1 < value2})
    var m = x.shift()
    return m.length
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2