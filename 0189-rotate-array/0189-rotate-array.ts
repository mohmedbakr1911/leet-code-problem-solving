/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n; 
    
    const reverse = (left: number, right: number):void => {
        while(left < right){
            const temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp
            left++;
            right--;
        }
    }

    reverse(0, n-1);
    reverse(0, k-1);
    reverse(k, n-1);

    console.log(nums);
};