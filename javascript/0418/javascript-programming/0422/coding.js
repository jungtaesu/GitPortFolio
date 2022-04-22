nums = [1,2,3,4];

function isPrime(num) {
    
    for(let i = 2; i < num; i++){
        if(num % i == 0) {
            return false;
        } 
    } return true;
}

function solution(nums) {

    let sumNumber =0;
    let result = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j+1; k < nums.length; k++) {
                sumNumber = nums[i] + nums[j] + nums[k];
                if(isPrime(sumNumber)) {
                    console.log(sumNumber)
                    result++;
                }
            }
        }
    }

console.log(result);
    return result;

}

solution([1,2,7, 6, 4]);