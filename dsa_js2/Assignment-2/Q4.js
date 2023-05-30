//Approch
//we can traverse over all the elements of the flowerbedflowerbedflowerbed and find out those elements which are 0(implying an empty position). For every such element, we check if its both adjacent positions are also empty. If so, we can plant a flower at the current position without violating the no-adjacent-flowers-rule. For the first and last elements, we need not check the previous and the next adjacent positions 

//Complexity
//Time complexity: O(n)O(n)O(n). A single scan of the flowerbedflowerbedflowerbed array of size nnn is done.
//Space complexity: O(1)O(1)O(1). Constant extra space is used.



let canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
      if (flowerbed[i] === 1) continue;
  
      if (
        (i === 0 || flowerbed[i - 1] === 0) &&
        (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
      ) {
        flowerbed[i] = 1;
        n--;
      }
    }
  
    return n <= 0;
  };


console.log(canPlaceFlowers([1,0,0,0,1], 1),
 `"You have a long flowerbed in which some of the plots are planted"`);