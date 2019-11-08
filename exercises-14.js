function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var x = []
    
 
    for(var b = 0; b < arrPenumpang.length; b++){
        var y = {}
        y['penumpang'] = arrPenumpang[b][0]
        y['naikDari'] = arrPenumpang[b][1]
        y['tujuan'] = arrPenumpang[b][1]
        y['bayar'] = (rute.indexOf(arrPenumpang[b][2])-rute.indexOf(arrPenumpang[b][1]))*2000
        x.push(y)
        }
        
    
    return x
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]