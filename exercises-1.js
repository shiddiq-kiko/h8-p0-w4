function angkaPrima(angka) {
    // you can only write your code here!
        for(var a = 2; a < angka; a++){
            if(angka % a === 0 || angka % 11 === 0){
                return false 
            }
             else if(angka % a != 0) {  
                return true
            } 
        }
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false