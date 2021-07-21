let nums=[1,2,3,1]
var containsDuplicate = function(nums) {
  let map=new Map()
  for(let i of nums){
    console.log(i)
    if(map.has(i)){
      return true
    }else{

    }map.set(i,i)

  }
  return false
   
};
console.log(containsDuplicate(nums))