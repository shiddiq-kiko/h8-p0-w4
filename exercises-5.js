function ubahHuruf(kata) {
    // you can only write your code here!
    var kataBerikut = ''
    for (var a = 0; a < kata.length; a++) {
        var x = kata[a].charCodeAt() + 1
        kataBerikut += String.fromCharCode(x)
    }
    return kataBerikut
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu