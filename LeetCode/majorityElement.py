## brute force solution
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        n = len(nums)
        dict = {}
        for num in nums:
            if(num not in dict): 
                dict[num] = 1
            else:
                dict[num] += 1
             
        for key in dict.keys():
            if(dict[key] >  n/2):
                return key

# reduce space complexity to O(1)
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        n = len(nums)
        if (n == 1): return nums[0]
        nums.sort()
        index = n//2
        return nums[index]

                