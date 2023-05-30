//Approch

//The score of nums is the difference between the maximum and minimum elements in nums.
//destructuring the nums and substract and add with the integer k in form [k, -k] we can apply this operations atmost once for each index.

var smallestRangeI = function (nums, k) {
  return Math.max(...nums) - k < Math.min(...nums) + k
    ? 0
    : Math.max(...nums) - k - (Math.min(...nums) + k);
};


console.log(smallestRangeI([1], 0));