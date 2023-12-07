function linearSearch(arr: number[], valueToFind: number) : boolean {
  for(let i = 0; i < arr.length; ++i) {
    if(arr[i] === valueToFind) {
      return true;
    }
  }
  return false;
}