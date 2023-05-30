//Approch
//Simple algorithm via a for loop.
//If target is found return the index
//If not keep iterating till you reach the end of the array
//If target is still not found yet , return -1

//complexity
//Time complexity: o(nlogn)

//Space complexity: O(1)


const search = function(nums, target) {
    for(let i=0; i<nums.length;i++){
        if(nums[i]=== target){
            return i;
        }
    }
    return -1 ;
};

console.log(`Here 9 is exist in an array and its index is `, search([-1,0,3,5,9,12], 9));