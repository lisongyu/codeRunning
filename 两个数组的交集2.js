nums1 = [1, 2, 2, 1], nums2 = [2, 2]
var intersect = function (nums1, nums2) {
  let map = {}, result = []
  // 遍历nums1，生成计数对象
  for (let item1 of nums1) {
    if (map[item1]) {
      map[item1]++
    } else {
      map[item1] = 1
    }
  }

  for (let item2 of nums2) {
    if (map[item2] > 0) {
      result.push(item2)
      map[item2]--
    }
  }
  return result

};

console.log(intersect(nums1, nums2))