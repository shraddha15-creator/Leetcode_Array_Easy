/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    
    const map = new Map ([
       ['I' , 1],
        ['V' , 5],
        ['X' , 10],
        ['L' , 50],
        ['C' , 100],
        ['D' , 500],
        ['M' , 1000],
    ])
    
    let sum = 0;
    for(let i = 0; i < s.length; i+=1){
        const carValue = map.get(s[i]);
        const nextValue = map.get(s[i+1]);
        if(nextValue > carValue){
            sum = sum + nextValue - carValue;
            i+=1;
        }else{
            sum+=carValue;
        }
    }
    return sum;
};
