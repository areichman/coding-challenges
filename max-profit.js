/*
Given a list of stock prices, determine the max profit 
that can be attained by buying and selling once.

Example
Input: [13, 10, 4, 6, 8]
Output: 4
Explanation: Buy at 4, sell at 8
*/

function solution(prices) {
  // keep a list of all possible profits
  const profits = [];

  // loop through each purchase price
  for (i = 0; i < prices.length; i++) {
    // loop through each selling price
    const remaining = prices.slice(i + 1);
    for (j = 0; j < remaining.length; j++) {
      const profit = remaining[j] - prices[i];
      profits.push(profit);
    }
  }

  // compute the max profit by sorting all profits
  const sorted = profits.sort((a, b) => a - b);
  const max = sorted[sorted.length - 1];
  console.log(max);
  return max;
}
