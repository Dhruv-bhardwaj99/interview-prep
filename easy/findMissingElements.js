const findMissingElements = (nums) =>{
    let set = new Set(nums);
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    const result = [];

    for(let i = min; i<=max; i++){
        if(!set.has(i)){
            result.push(i)
        }
    }

    return result;
}