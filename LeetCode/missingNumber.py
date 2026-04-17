class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        # nums.sort()
        # for index in range(0,len(nums)):
        #     if(index != nums[index]):
        #         return index
        # return len(nums)
        n = len(nums)
        sum = n*(n+1) // 2
        checkZero = False
        for index in range(0,len(nums)):
            if nums[index] == 0: 
                checkZero = True
            sum = sum - nums[index]
        if checkZero == False:
            return 0
        if(sum == 0 ):
            return n
        else:
            return sum
        
# we can use xor too 