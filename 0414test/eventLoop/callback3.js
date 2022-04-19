
// function 아반떼(callback) {
//     setTimeout(()=>{
//         console.log('아반떼')
//         callback()
//     }, 1000)
// }


function 아반떼() {
    return new Promise((resolve, reject)=>{ //backgroud에 들어간다 프로미스는 디폴트로 백그라운드
        setTimeout(()=>{
            resolve('아반떼 go');
        }, 1000)
    })
}

function 소나타() {
    return new Promise((resolve, reject)=>{ //backgroud에 들어간다 프로미스는 디폴트로 백그라운드
        setTimeout(()=>{
            resolve('소나타 go');
        }, 2000)
    })
}

function 제네시스() {
    return new Promise((resolve, reject)=>{ //backgroud에 들어간다 프로미스는 디폴트로 백그라운드
        setTimeout(()=>{
            resolve('제네시스 go');
        }, 3000)
    })
}
//프로미스 구현시 콜백 안받고 각각 개발별로 끝남. 호출할때 신경써주면 됨.

아반떼().then((data)=>{
    console.log(data)
    return 소나타();
}).then((data)=>{
    console.log(data)
    return 제네시스();
}).then((data)=>{
    console.log(data);
})

async function 자동차() {
    const result= await 아반떼() //프로미스 객체에서 result(resolve) 값이 떨어진다.
    console.log(result); //프로미스는 콜백으로밖에 못받았다 왜냐하면 비동기잖아.
    const result2= await 소나타()
    console.log(result2);
    const result3= await 제네시스()
    console.log(result3);
}

자동차();


//resolve 안의 값이 then 안 data로 떨어진다.
console.log(아반떼())//프로미스 객체

// function 소나타(callback) {
//     setTimeout(()=>{
//         console.log('소나타')
//         callback()
//     }, 2000)
// }

// function 제네시스(callback) {
//     setTimeout(()=>{
//         console.log('제네시스')
//         // callback()
//     }, 3000)
// }

// 아반떼(소나타(제네시스)); // 아예 소나타가 호출되어버린다 선언이 아니라. 말도안되는 문법이 도니다
// 아반떼(()=>{소나타(제네시스)}); 

//콜백 헬

// promise

