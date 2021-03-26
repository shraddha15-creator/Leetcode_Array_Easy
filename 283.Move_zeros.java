class Solution {
    public void moveZeroes(int[] nums) {
        int zeroCount = 0;
        for(int i = 0; i < nums.length; i++){
            if(nums[i] == 0){
                zeroCount++;
            }else{
                nums[i - zeroCount] = nums[i];
            }
        }
        while(zeroCount != 0){
            if(nums[nums.length - zeroCount] != 0)
                nums[nums.length - zeroCount] = 0;
            zeroCount--;
        }
    }
}
