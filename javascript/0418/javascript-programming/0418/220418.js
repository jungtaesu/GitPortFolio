// alert("start javascript!!");

//숫자형

/* 
    10진수
    255
    2진수 (0b1111 1111),
    
    8진수, 10진수
*/

//

let correctNum = Math.floor((Math.random() * 10)) % 8 + 3;
const randomNum = Math.random() * 7 + 3; // 0.0~1.0사이의 난수 생성


console.log(randomNum);

// console.log(Math.floor(randomNum)); //내림 2
// console.log(Math.ceil(randomNum));2 //올림
console.log(Math.round(randomNum)); //반올림

/*
    실습.
    프로그램이 3 ~ 10 사이의 랜더한 값을 지정한다.
    값을 하나 입력받아서 정답인지 아닌지 출력한다.
    
*/



var NUM = Math.round(randomNum); //반올림
var value = prompt("정답은?", "");
console.log("나의 답은 :" , value);
if(value == NUM) {
    console.log("정답이다");
} else {
    console.log("틀렸다.");
} 

//변수명 이름 규칙
/* 
    1.알파벳, _,-,숫자
     1_1. 숫자가 앞에올수 없다
     
    2.camel 표기법, 파스칼(시작부터 대문자)
     첫 시작 소문자, 나머지는 단어 첫글자는 대문자 = 카멜(낙타 등 같다)
    
    3. 대소문자를 구분한다.
     
*/
// console.log(varName);// 호이스팅 

// var varName = '김'; // 가장 오래된 버전에서 사용하는 변수 타입
// console.log(varName);// 호이스팅 

// if (true) {
//     var varName = 'kim';
//     // console.log(varName);
// }
// console.log(varName);

// let letName = "kjh"; // 
// console.log(letName);

// if (true)  {
//     let letName = "kjh2";
//     console.log(letName);
// } //이 영역을 지나가면 메모리해제
// console.log(letName);

// const constName = "t"; //값이 수정될일 없는 변수

//빨간줄은 컴파일 에러 , 실행해서 콘솔에 에러뜨는건 런타임 에러
// console.log(constName);