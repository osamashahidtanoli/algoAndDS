// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

function rotateArry(nums: number[], k: number) {
    let l = 0;
    let r = nums.length - 1;
    k = k % nums.length;
   
    while(l < r) {
        const leftEl = nums[l];
        const rightEl = nums[r];
   
        nums[l] = rightEl;
        nums[r] = leftEl;
        l = l + 1;
        r = r - 1;
    }
   
       l = 0; 
       r = k - 1;
   
     while(l < r) {
        const leftEl = nums[l];
        const rightEl = nums[r];
   
        nums[l] = rightEl;
        nums[r] = leftEl;
        l = l + 1;
        r = r - 1;
    }
   
    l = k; 
       r = nums.length - 1;
      while(l < r) {
        const leftEl = nums[l];
        const rightEl = nums[r];
   
        nums[l] = rightEl;
        nums[r] = leftEl;
        l = l + 1;
        r = r - 1;
    }
}