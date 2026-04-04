

nums = [1, 1, 2]
k = 1
for i in range(1, len(nums)):
    if nums[i] != nums[i - 1]:
        nums[k] = nums[i]
        k += 1


    def removeDuplicates(nums):
        i = 0 
        j = 1
        arr = nums
        while  j < len(nums):
            if nums[i] == nums[j]:
                nums.pop(j)
            elif nums[i] < nums[j]:
                i = j
                j = j + 1
        
# 1. Brute Force
# Time Complexity: O(n^2)
# Space Complexity: O(1)

# 2. Two Pointers
# Time Complexity: O(n)
# Space Complexity: O(1)
        



        
