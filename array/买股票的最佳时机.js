var maxProfit = function (prices) {

  let minVal=prices[0]
  let res=0;
  for(let i=0;i<prices.length;i++){
    minVal=Math.min(prices[i],minVal)
    res=Math.max(res,prices[i]-minVal)
  }
return res;

};
let prices = [7,1,5,3,6,2]

console.log(maxProfit(prices))