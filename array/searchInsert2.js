let arr = [1, 3, 5, 9], target = 6

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
        return mid;
    } else if (nums[mid] > target) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
  } 
  return left;
};

console.log(searchInsert(arr, target))