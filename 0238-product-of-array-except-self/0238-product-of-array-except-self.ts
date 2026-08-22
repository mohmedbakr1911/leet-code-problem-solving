function productExceptSelf(nums: number[]): number[] {
   let answer : number[] = [];
//    let product = 1;
//    let self = 0;
   const pr = nums.reduce((acc, number)=>{
    return acc * number
   }, 1)

   console.log(pr);

   for(let i = 0; i < nums.length; i++){
    if(nums[i] === 0) {
        let product = 1;
        for(let j = 0; j < nums.length; j++){
            if(i !== j) {
                product *= nums[j];
            }
        }
        answer.push(product);
    } else {
        answer.push(pr / nums[i]);
    }
   }
   return answer;

};