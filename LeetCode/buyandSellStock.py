## my solution 
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        first =  0
        second = 1
        max = 0
        while(second != len(prices)):
            if(prices[first] >= prices[second]):
                print(f"prices[second] {prices[second]}")
                first = second
                second = second + 1
            else:
                profit = prices[second] - prices[first] 
                print(profit)
                if( max < profit):
                    max = profit
                second = second + 1
        return max
    
## other solution
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy_price = prices[0]
        profit = 0

        for p in prices[1:]:
            if buy_price > p:
                buy_price = p
            
            profit = max(profit, p - buy_price)
        
        return profit


            