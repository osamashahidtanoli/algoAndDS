// Find the length of longest substring in a string without repeating characters

function longestSubstringLength(s: string) {
    let left = 0;
    let result = 0;
    const charSet = new Set();
  
    for (let right = 0; right < s.length; right++) {
      const char = s[right];
      while (charSet.has(char)) {
        charSet.delete(s[left]);
        left++;
      }
      charSet.add(char);
      result = Math.max(result, right - left + 1);
    }
  
    return result;
}
  
  