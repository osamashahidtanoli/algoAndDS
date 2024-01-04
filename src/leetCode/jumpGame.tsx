// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

function jumpGame(nums: number[]) {
    let goal = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if(i + nums[i] >= goal){
            goal = i;
        }

    }
        return true ? goal === 0 : false;
};