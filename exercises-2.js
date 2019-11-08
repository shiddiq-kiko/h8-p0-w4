function fpb(angka1, angka2) {

    for(var a = angka1; a > 0; a--){
      if(angka1 % a  === 0 && angka2 % a === 0 ){
        return a
      } 
  } 
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1