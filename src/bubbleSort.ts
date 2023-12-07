function bubbleSort(arr: number[]): void {

    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                const greaterNumber = arr[j];
                const smallerNumber = arr[j + 1];
                arr[j] = smallerNumber;
                arr[j + 1] = greaterNumber;
            }
        }
    }

}