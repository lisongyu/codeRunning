let nums = [2, 7, 11, 15], target = 9
// let nums = [3,2,4], target = 6
// let nums = [3,3], target = 6
function twoSum() {
  let map = new Map();
  for (let i = 0; i < nums.length; i++){
    let dif = target - nums[i];
    if (map.has(dif)) {
      return [map.get(dif),i]
    }
    map.set(nums[i],i)
  }
}
console.log(twoSum())