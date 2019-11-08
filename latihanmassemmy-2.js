/**
 * Objective: Memahami pengecekan data di dalam object
 *
 * Misalkan kita memiliki sebuah object seperti ini
 * {
 *  name: 'Kosasih',
 *  grade: 90
 * }
 *
 * Buatlah sebuah fungsi yang akan melakukan pengecekan apakah sebuah property ada di dalam object
 */
function hasProperty(obj, key) {

    for(var a in obj){
      if(a === key){
        return true
    }
  }
  return false
}
console.log(
  hasProperty(
    {
      name: 'Kosasih',
      age: 22,
      address: 'Jakarta',
      grade: 90
    },
    'grade'
  )
) // true
console.log(
  hasProperty(
    {
      name: 'Kosasih',
      age: 22,
      address: 'Jakarta',
      grade: 90
    },
    'gender'
  )
) // false
/**
 * Objective: Grouping collection of data into an object
 *
 * Kosasih memiliki sebuah peternakan dengan kumpulan hewan sebagai berikut
 * [ 'Ayam', 'Bebek', 'Ayam', 'Kuda', 'Kuda']
 *
 * Buatlah sebuah fungsi yang akan menerima input sebuah array seperti diatas, dan akan mengembalikan
 * Sebuah object jumlah hewan yang dimiliki oleh Kosasih dikelompokan berdasarkan namanya.
 * Liat driver code untuk output yang lebih jelas
 */
function groupAnimal(array) {
    var jumlahHewan = {

    }
    // var res = []
    array.sort()

    for(var a = 0; a < array.length; a++){
        if(array[a] === array[a+1]){
            // res.push(array[a])
            jumlahHewan[array[a]] = 1
        } else if(array[a] != array[a+1]) {
          if(array[a-1] != array[a]){
            jumlahHewan[array[a]] = 1
          } else {
            jumlahHewan[array[a]] = jumlahHewan[array[a]] + 1
          }
             
        }
  }
    return jumlahHewan
}
console.log(groupAnimal(['Ayam', 'Bebek', 'Ayam', 'Kuda', 'Kuda']))
/**
 * {
 *  Ayam: 2,
 *  Kuda: 2,
 *  Bebek: 1
 * }
 */