let arr=[1,3,5,6], target=0

function searchInsert(nums, target) {
  let currentIndex=-1
  for(let i=0;i<nums.length;i++){
    if(nums[i]>=target){
      currentIndex=i
      break;
    }
    if(target>nums[nums.length-1]){
      currentIndex=nums.length
    }
  }
  return currentIndex
};

console.log(searchInsert(arr,target))