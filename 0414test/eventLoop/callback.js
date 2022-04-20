//선언과 호출

const 더하기 = (a, b) => console.log(a+b)
const 함수 = (callback,a,b) => callback(a,b);

//    function 더하기(a,b){
//        console.log(a+b)
//     return a+b;
// }

// function 함수(callback, a, b){

//     return callback(a,b);
// }

함수(더하기, 1, 3);
