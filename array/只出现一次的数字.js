var singleNumber = function(nums) {
  // return nums.reduce((a,b)=>a^b)
  for(let i=1;i<nums.length;i++){
    nums[0]=nums[0]^nums[i]
    console.log(nums[0])
  }
  return nums[0]
};

let nums=[4,1,2,1,2]

console.log(singleNumber(nums))
console.log(1^5)