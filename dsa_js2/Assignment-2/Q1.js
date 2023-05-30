//Approch
//The given input array contains 2n integers (means it will always have even number of elements) and we need to form the pairings of the array’s elements such that the overall sum of the minimum out of such pairings is maximum. So if we choose (a,b) pairing we have to take care that to get maximum sum the differnce of a and b is minimized.

//Complexity
//Time Complexity: O(nlogn). Sorting will take O(nlogn) complexity.
//Space Complexity: O(1).

function getPairsCount(arr, n, sum)
{
    let count = 0; // Initialize result
 
    // Consider all possible pairs and check their sums
    for (let i = 0; i < n; i++){
        for (let j = i + 1; j < n; j++){
            if (arr[i] + arr[j] == sum){
                count++;
            }
        }
    }
 
    return count;
}
 
// Driver function to test the above function
    let arr = [ 1, 4, 3, 2 ];
    let n = arr.length;
    let sum = 4;
    console.log("Count of pairs is "
        + getPairsCount(arr, n, sum));
