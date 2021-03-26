/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      
        const result = [];
        
        for(i = 0; i < nums.length; i++){
            let next = target - nums[i];
            
            for(j = 1 + i; j < nums.length; j++)
                if(nums[j]===next){
                    result.push(i,j);
                    return result;
                }
        }
    
};
