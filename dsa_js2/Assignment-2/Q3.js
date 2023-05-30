//Approch
//use map to iterate over an array
//use map method to returns the exists, specied and stored key-value then sort the array


let findLHS = function (nums) {
  //creates the map
  let map = new Map();
  for (let n of nums) {
    //it returns true if the value exists otherwise returns false
    if (map.has(n)) {
      //get retuens the specified element from the map
      map.set(n, map.get(n) + 1);
    } else {
      // stores the value by the key- i.e(key, value)
      map.set(n, 1);
    }
  }
  //destructure the array
  let arr = [...map].sort((a, b) => a[0] - b[0]);
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] == arr[i - 1][0] + 1 && arr[i][1] + arr[i - 1][1] > max) {
      max = arr[i][1] + arr[i - 1][1];
    }
  }
  return max;
};

console.log(findLHS([1,3,2,2,5,2,3,7]), `The longest harmonious subsequence is  [3,2,2,2,3]`);
