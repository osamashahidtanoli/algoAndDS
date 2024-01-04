function quickSort(arr: number[], starting: number, ending: number): void {
    if (starting >= ending) {
      return;
    }
  
    const pivotIndex = partition(arr, starting, ending);
    quickSort(arr, starting, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, ending);
  }
  
  function partition(arr: number[], starting: number, ending: number): number {
    const pivot = arr[ending];
  
    let idx = starting - 1;
  
    for (let i = starting; i < ending; i++) {
      if (arr[i] <= pivot) {
        idx++;
        const tmp = arr[i];
        arr[i] = arr[idx];
        arr[idx] = tmp;
      }
    }
  
    idx++;
    arr[ending] = arr[idx];
    arr[idx] = pivot;
  
    return idx;
  }
  
  function quickSortFn(arr: number[]): void {
    quickSort(arr, 0, arr.length - 1);
  }
  