// Given an array of positive integers and a positive numberk, find the maximum sum of any contiguous subarray of size k.


function maxSumOfSubArry(arr: number[], k: number) {
    let currentSum = 0;
    let maxSum = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        currentSum += arr[i]

        if(i >= k - 1)
        {
            maxSum = Math.max(currentSum, maxSum);
            currentSum -= arr[i + 1 - k];
        }
        
    }

    return maxSum;

}


// Explaination
// We take initial sum to 0 and maxSum to lowest possible value
// then we iterate  the whole arr
// When we reach the kth element 
// We check for max value by comparing current sum and max value
// then we subtract the first value from the current sum.

// Iteration
// arr=[3, 5, 2, 1, 7], k=2

// current sum = 0
// max sum = -infinity

// 1st i = 0
// current sum = arr[i] = 3
// i>= k- 1 => 0 >= 1 // No

// 2nd i = 1
// current sum += arr[1] = 3 + 5 = 8
// i>= k- 1 => 1 >= 1 // Yes
// maxSum = 8 
// current  sum -= arr[i - (k - 1)] = arr[1 - (2 - 1)] = arr[0] = 8 - 3 = 5

// 3rd i = 2
// current sum += arr[1] =  5 + 2 = 7
// i>= k- 1 => 2 >= 1 // Yes
// maxSum = 8 
// current  sum -= arr[i - (k - 1)] = arr[2 - (2 - 1)] = arr[1] => 7 - 5 = 2




