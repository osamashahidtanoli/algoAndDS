function crystalBall(arr: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(arr.length));

    let i = jumpAmount;
    for(; i < arr.length; i += jumpAmount){
        if(arr[i]) {
            break;
        }
    }

    i -= jumpAmount;

    for(let j = 0; j <= jumpAmount && i < arr.length; i++, j++){
        if(arr[i]) return i;
    }

    return -1;
}

// This algo is used to find the first truth value in an array..
// In this algo we first find the true value in an array by going sqrt of array length.
// Once we find the true value we then walk back sqrt and then search for the truthy value.

// meaning [f,f,f,f,f,f,t,t]
// jmpAmount = 3
// arr[3] === true // which is false
// arr[6] === true // which is false
// arr[9] which does not go in the loop
// so we go back to arr[6] and then walk one by one to search
// and then find that arr[7] is true which is the first truth value in the array