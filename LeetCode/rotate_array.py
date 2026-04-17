class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        while k != 0:
            last = nums[len(nums)-1]
            for j in range(len(nums) - 1 , 0 , -1):
                print(j)
                nums[j] = nums[j-1]
            nums[0] = last
            k = k -1