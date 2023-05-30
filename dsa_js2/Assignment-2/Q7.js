//Approch
//To check whether an array nums is monotone increasing, we'll check nums[i] > nums[i+1] and diff < 0 for all i. The check for monotone decreasing is similar.
//complexities
//Time Complexity: O(N)O(N)O(N)
//Space Complexity: O(1)O(1)O(1).

let isMonotonic = function (nums) {
  let diff = 0;
  for (let i = 0; i < nums.length - 1; ++i) {
    if (nums[i] != nums[i + 1] && diff == 0) diff = nums[i] - nums[i + 1];
    else if (
      (nums[i] > nums[i + 1] && diff < 0) ||
      (nums[i] < nums[i + 1] && diff > 0)
    )
      return false;
  }
  return true;
};


console.log(`Returns the given array isMonotonic`, isMonotonic([1,2,2,3]));
