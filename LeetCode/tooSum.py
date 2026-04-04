def twoSum( nums, target: int):
        dict = {}
        for i in range(0 ,len(nums)):
            num = target - nums[i]
            if(num in dict):
                return [dict[num] ,i]
            dict[nums[i]] = i

    # 1. Brute Force
    # Time Complexity: O(n^2)
    # Space Complexity: O(1)                
    # 2. Hash Map
    # Time Complexity: O(n)
    # Space Complexity: O(n)    

solution = twoSum([2,7,11,15], 9)
print(solution)