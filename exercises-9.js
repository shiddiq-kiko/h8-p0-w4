function checkAB(num) {
    // you can only write your code here!
    var x = ''
    for(var a = 0; a < num.length; a++){
        if(num[a] === 'a' || num[a] === 'b'){
            for(var b = a; b < num.length; b++){
                if(num[b+4] === 'b' || num[b+4] === 'a' ){
                    x = num[b+4]
                    break
                    // console.log(x)
                    // if(x === 'a' || x === 'b'){
                    //     return true
                    // }
                } 
                
            }
        }
    }
    if(x === 'a' || x === 'b'){
        return true
    }else{return false}
    
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false