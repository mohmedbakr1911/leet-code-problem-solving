function majorityElement(nums: number[]): number {
    let n = nums.length / 2;
    let c = 1;
    
    for(let i = 0; i < nums.length; i++){
        let counter = 1;
            for(let j = 1; j < nums.length; j++){
                if(nums[i] == nums[j]){
                    counter++;
                }
            }
            if(counter > c)
                c = counter;
            if(c > n){
                return nums[i];
            }
    }
    
    return 0;
};