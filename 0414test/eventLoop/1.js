// function ingoo() {
//     console.log('3')
//     return 4
// }

// function goak() {
//     console.log('1')
//     return ingoo()
// }

// function hello(callback) {
//     goak()
//     console.log('5')
//     callback('6')
// }

// const result = ingoo()
// hello(goak)
// console.log(typeof result);

// // callstacks

// function a(callback){ //선언
//     setTimeout(time2,0)  //비동기 -> 백그라운드 이동 (1) 시간에 따라 찍히는 순서가 다르다
//     console.log('hello world') //호출
//     setTimeout(time,0) //비동기 -> 백그라운드 이동 (2)
//     callback()
//   }
//   console.log(3) //호출
  
//   function time2(){ //선언
//     console.log('hi')
//   }
  
//   function time(){ //선언
//     console.log('5')
//   } 
  
//   a(time)

  //얇코 제로초

//   function checkPrimeNumber(num) {
//     for(let i = 2; i < num; i++) {
//         if(num % i == 0) {
//             return false;
//         }
//     }
//     return true;
//   }
  
//   solution([1, 2, 3,4]);

//   function solution(nums) {

//     let sumNumber = 0;
//     let result = 0;
//     //숫자 세개를 골라서 합하는 코드
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             for(let k = j + 1; k < nums.length; k++) {
//                 sumNumber = nums[i] + nums[j] + nums[k];
//                 console.log(sumNumber);
//                 if(checkPrimeNumber(sumNumber)) {
//                     result++; //true라면 result 값 상승
//                 }
//             }
//         }
//     }
//     // result = sumNumber;
//     //그 숫자가 소수인지 판단
//     console.log(result);
//       return result;
//   }



