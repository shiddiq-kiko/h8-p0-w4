function urutkanAbjad(str) {
    // you can only write your code here!
    var abjad = []
    for(var a = 0; a < str.length; a++){
        var x = str[a] 
        abjad.push(x)
    }
    abjad.sort()
    return abjad.join('')
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis