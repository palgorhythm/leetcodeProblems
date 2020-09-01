const lengthOfLongestSubstring = (s) => {
  // sliding window
  let left = 0
  let right = 0
  const seen = {}
  let max = 0
  // O(n)
  // {
  //   a: 0
  //
  // }
  //    x
  //   x
  // abba


  // abcabcbb


  while(right < s.length){
    // look at the right edge of the window.
    const currentChar = s[right]

    // if we've already seen this character
    if(seen.hasOwnProperty(currentChar)){
      const seenCurrentCharIndex = seen[currentChar]
      delete seen[currentChar] // explain this better
      // we need to bump the left side of the window
      // to 1 after the index of the character we've seen.
      if(seenCurrentCharIndex >= left){
        left = seenCurrentCharIndex + 1
      }
    } else {
      seen[currentChar] = right
      right += 1
    }

    const curLength = right - left
    if(curLength > max){
      max = curLength
    }
  }
  return max
}

// console.log('RESULT', lengthOfLongestSubstring('abcabcbb'), '\n')
// console.log('RESULT', lengthOfLongestSubstring('bbbbb'), '\n')
// console.log('RESULT', lengthOfLongestSubstring('pwwkew'), '\n')
// console.log('RESULT', lengthOfLongestSubstring(' '), '\n')
console.log('RESULT', lengthOfLongestSubstring("bbtablud"), '\n')