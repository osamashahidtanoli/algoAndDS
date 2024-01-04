// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

function majorityEl(nums: number[]) {
    let result = 0;
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        if(count === 0) {
            result = nums[i];
        }

        if(nums[i] === result) {
            count = count + 1;
        }
        else{
            count = count - 1;
        }

    }
        return result;
}