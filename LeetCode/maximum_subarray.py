class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        global_max = nums[0]
        current_max = nums[0]

        ## kadane 's algorithm
        for index in range(1, len(nums)):
            current_max = max(nums[index] , nums[index] + current_max)
            global_max = max(current_max , global_max)
         
        return global_max
    
## kadane's algorithm is used to find the maximum sum of a contiguous subarray in an array of integers. It works by iterating through the array and keeping track of the maximum sum of a subarray that ends at the current index. The algorithm updates the global maximum sum whenever it finds a new maximum. This approach has a time complexity of O(n) and a space complexity of O(1).    
