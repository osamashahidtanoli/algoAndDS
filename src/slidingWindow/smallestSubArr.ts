// Given an arr[] find the smallest subarr that has a sum of k.


function smallestSubArr(arr: number[], target: number) {
    let start = 0;
    let currentSum = 0;
    let minLength = Infinity;

    for(let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while(currentSum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            currentSum -= arr[start];
            start++;
        }
    }

    return minLength;
}

// Explaination
// We start from the left and then go to the right and keep on adding until
// currentSum is greater than target
// then we find the min length
// subtract the starting value and increment the start and see if it is still greater 
// if it is not then repeat the process


