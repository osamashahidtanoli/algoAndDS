function binearSearch(arr: number[], valueToFind: number) : boolean {
    let startingPoint = 0;
    let endingPoint = arr.length;
    do {
    const mid = Math.floor(startingPoint + (endingPoint - startingPoint) / 2);
    const currentValue = arr[mid];

    if(currentValue === valueToFind ) {
        return true;
    } else if (currentValue < valueToFind) {
        startingPoint = mid + 1;
    } else {
        endingPoint = mid;
    }

    } while(startingPoint < endingPoint)
    return false;
}