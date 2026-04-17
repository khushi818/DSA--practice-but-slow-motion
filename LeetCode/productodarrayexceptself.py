class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        leftArray = [1] * n
        rightArray= [1] * n
        res = [1] * n
        for i in range(1 , n):
            leftArray[i] = leftArray[i-1] * nums[i-1]
        
        for j in range(n-2, -1 , -1):
            rightArray[j] = rightArray[j + 1] * nums[j + 1]
        
        for k in range(n):
            res[k] = leftArray[k] * rightArray[k]
        
        return res




        