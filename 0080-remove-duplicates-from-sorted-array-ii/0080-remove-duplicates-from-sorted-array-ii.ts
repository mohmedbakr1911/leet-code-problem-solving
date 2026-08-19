function removeDuplicates(nums: number[]): number {
    if (nums.length <= 2) return nums.length;

    let k = 2; // Next position to overwrite

    for (let j = 2; j < nums.length; j++) {
        // Only keep nums[j] if it is different from the item 2 places back
        if (nums[j] !== nums[k - 2]) {
            nums[k] = nums[j];
            k++;
        }
    }

    return k;
}