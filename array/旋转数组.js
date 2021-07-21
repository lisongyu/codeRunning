let nums = [1, 2, 3, 4, 5, 6, 7], k = 3


var rotate = function (nums, k) {
   let getLen=nums.length
   let curK=k%getLen
   let numNew=[]
   for (i=0; i<nums.length;i++){
     let currentInx=(i+(getLen-curK))%getLen
    numNew[i]=nums[currentInx]
   }
   return numNew
};
console.log(rotate(nums, k))