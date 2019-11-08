function changeMe(arr) {
// you can only write your code here!
var objec = {

}
for(var a = 0; a < arr.length; a++){
    for(var b = 0; b < arr[0].length; b++){
            if(b === 0){
                objec['firstName'] = arr[a][0]
            } else if(b === 1){
                objec['lastName'] = arr[a][1]
            } else if(b === 2){
                objec['gender'] = arr[a][2]
            } else if(b === 3){
                if(arr[a][3] != undefined){
                    objec['age'] = 2019-arr[a][3]
                } else{
                    objec['age'] = 'Invalid Birth Year'
                }
            }
            
        }
        console.log(`${a+1}. ${arr[a][0]} ${arr[a][1]}`)
        console.log(objec)
    }
    
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""


// switch(b){
//     case 0 :
//         objec['firstName'] = 2;
//         // arr[a][0];
//         break;
//     case 1 :
//         objec['lastName'] = arr[a][1];
//         break;
//     case 2 :
//         objec['gender'] = arr[a][2];
//         break;
//     case 3 :
//         objec['age'] = arr[a][3];
//         break;
// }