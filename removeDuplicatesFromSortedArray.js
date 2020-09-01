const removeDuplicates = (arr) => {
  let currentUniqueValue = arr[0]
  let nextIndex = 0
  for(let i = 0; i < arr.length; i += 1){
    const cur = arr[i]
    if(cur !== currentUniqueValue){
      nextIndex += 1
      arr[nextIndex] = cur
      currentUniqueValue = cur
    }
  }
  arr.length = nextIndex + 1
  return arr.length
}

const ex1 = [1, 1, 2] // 2
const ex2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] // 5

console.log(removeDuplicates(ex1), ex1)
console.log(removeDuplicates(ex2), ex2)