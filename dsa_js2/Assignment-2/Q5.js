//Approch
//To every triplet out of the given nums array and check their product and find out the maximum product out of the array
//create variable and using sort method to sort an array then product the three numbers then returns maximum positive product
//Complexity
//Time complexity : O(n3)O(n^3)O(n^3). We need to consider every triplet from numsnumsnums array of length nnn.
//Space complexity : O(1)O(1)O(1). Constant extra space is used.

var maximumProduct = function (nums) {
  nums.sort((a, b) => b - a);
  const positiveProduct = (nums[0] * nums[1] * nums[2]);
//   const negativeProduct =
//     (nums[0] * nums[nums.length - 1] * nums[nums.length - 2]);
//   const mixedProduct = (nums[0] * nums[nums.length - 1] * nums[nums.length - 2]);
  return Math.max(positiveProduct);
  
  //   return Math.max(positiveProduct, negativeProduct, mixedProduct);
};


console.log(`The three number whose maximum product is `, maximumProduct([1,2,3]));