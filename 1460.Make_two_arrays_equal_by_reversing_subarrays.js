/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const sorted =(a,b) => a-b;
    
    const sortedTarget = target.sort(sorted);
    const sortedArr = arr.sort(sorted);
    
    return sortedTarget.join('') === sortedArr.join('')
};
