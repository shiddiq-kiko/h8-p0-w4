function cariModus(arr) {
    // you can only write your code here!
    var b = 0
    arr.sort(function(value1, value2) { return value1 > value2 })
    for(var a = 0; a < arr.length; a++){
        if(arr[a] === arr[a +1] && arr[a] === arr[a+2]){
            b = -1
            break
        }
        else if(arr[a] === arr[a+1]){
            b = arr[a]
            break
        } 
        else if(arr[a] != arr[a+1] && arr[a] != arr[a+2]){
            b = -1 
        }
    }
    return b
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1