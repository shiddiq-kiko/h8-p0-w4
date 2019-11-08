/**
 * Buatlah sebuah object dari hewan, yang memiliki beberapa propert
 * - Nama hewan
 * - Habitat hewan
 * - Jumlah kaki hewan
 * - Jenis kelamin dari hewan
 *
 * Setelah membuat object seperti diatas jawablah pertanyaan dibawah ini
 * - Bagaimana cara mendapatkan nama hewan
 * - Bagaimana cara jika saya ingin menambahkan properi baru ke hewan contoh
 *   contoh bagaimana jika saya ingin menambahkan tipe hewan ( unggas, burung, dll)
 * - Dapatkah saya membuat properti yang berupa sebuah array ke dalam object? Jika iya berikan contoh satu
 * - Dapatkah saya menghapus sebuah properti yang sudah ada di dalam sebuah objek? Jika iya berikan contoh satu
 * - Dapatkah saya membuat properti yang berupa sebuah object ke dalam object? Jika iya berikan contoh satu
 *  - Dapatkah saya melakukan looping di dalam object? Jika iya berikan contoh satu
 *  - Tuliskanlah built in function yang bisa kita gunakan di dalam object?
 */

 var hewan = {
     namaHewan    : 'komodo',
     habitatHewan : 'savana',
     jumlahKaki   : 4,
     jeniKelamin : 'jantan', 
    }
    // var Jenis_kelamin = 'Jenis_kelamin'
    // console.log(hewan[Jenis_kelamin])

    
    hewan['tipeHewan'] = 'reptil'
    
    // console.log('\n')
    // console.log(hewan)

    hewan['makanan'] = [
        'Banteng',
        'Sapi',
        'Rusa'
    ]
    console.log('\n')
    console.log(hewan)

    // delete hewan['Habitat_hewan']
    // console.log('\n')
    // console.log(hewan)

    hewan['jumlahKaki'] = {
        jumlah : 4,
        kuku : 16,
        sisik : 'banyak'
    }

    console.log('\n')
    // console.log(hewan)

    for(var key in hewan){
        console.log(key, ' = ', hewan[key])
    }
    
    