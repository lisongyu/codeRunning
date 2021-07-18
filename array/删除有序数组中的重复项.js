
let nums = [1,1,2]

var removeDuplicates = function () {
  let k=0

  for (let i = 0; i < nums.length-1; i++) {
    if (nums[i] !== nums[i + 1]) {
     nums[++k]=nums[i+1]
   }
  }
  return k+1



};

console.log(removeDuplicates())