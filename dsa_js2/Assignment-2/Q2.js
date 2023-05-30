//Approch
//using set method that remove all similar candies.
//complexity
//Time complexity : O(N)O(N)O(N).

//Adding an item into a Hash Set has an amortized time of O(1)O(1)O(1). Therefore, adding NNN items requires O(N)O(N)O(N) time. All of the other operations we use are O(1)O(1)O(1).

//Space complexity : O(N)O(N)O(N).

//The worst case for space complexity occurs when all NNN elements are unique. This will result in a Hash Set containing NNN elements.


//
let distributeCandies = function (candyType) {

  // The Set Method will remove all of the duplicates from candyType

  return Math.min(candyType.length / 2, new Set(candyType).size);
  //Math.min - returns the smallest among the numbers 
};

console.log(distributeCandies( [1,1,2,2,3,3]));
