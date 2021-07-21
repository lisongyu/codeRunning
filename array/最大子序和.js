let nums = [-2,1,-3,4,-1,2,1,-5,4]


var maxSubArray = function(nums) {
  let maxAns = nums[0];
  let pre=0
  nums.forEach(x=>{
    // 两数只和和当前值对比
    pre=Math.max(pre+x,x)
    maxAns=Math.max(pre,maxAns)
  })
  return maxAns
};

console.log(maxSubArray(nums))