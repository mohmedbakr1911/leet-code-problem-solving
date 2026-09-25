function maxProfit(prices: number[]): number {
    
    let maxProfit = 0;
    let buy = prices[0];

    for(let i = 1; i < prices.length; i++){
       if(buy > prices[i]){
        buy = prices[i];
       }

       maxProfit = Math.max(maxProfit, prices[i] - buy) 
    }

    
    return maxProfit;
};