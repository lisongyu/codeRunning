let nums = [2, 7, 11, 15], target = 9
// let nums = [3,2,4], target = 6
// let nums = [3,3], target = 6
function twoSum() {
  let temp=[]
  for (let i = 0; i < nums.length; i++){
    let dif = target - nums[i]  // i为当前值
    if (temp[dif] != undefined) {
      return [temp[dif],i]
    }
    temp[nums[i]]=i
  }
  
}
console.log(twoSum())