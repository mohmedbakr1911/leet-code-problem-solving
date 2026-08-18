function removeDuplicates(nums: number[]): number {
    let k = 0;
    let j = 1;
    let l = nums.length
    while(j !== l || k == j){
        if(nums[k] == nums[j]){
            j++
        }else if(nums[k] !== nums[j] && j !== k+1){
            k++;
            nums[k] = nums[j];
        }else{
            k++;
            j++;
        }
    }
    console.log(nums);
    return k + 1;
};