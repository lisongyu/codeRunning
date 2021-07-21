var maxProfit = function (prices) {

  let minVal=prices[0]
  let res=0;
  for(let i=0;i<prices.length;i++){
    if(prices[i]<prices[i+1]){
      res+=prices[i+1]-prices[i]
    }
   
  }
return res;

};
let prices = [1,2,3,4,5]

console.log(maxProfit(prices))