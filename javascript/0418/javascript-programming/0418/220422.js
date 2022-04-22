/*
    비동기처리 new Promise 호출과 동시에 비동기처리 시작
*/

async function asyncTimeOutCheckAdult(age, timeout) {
    if(age >= 20) {
    setTimeout(()=>{
        console.log(`asyncTimeoutCcheck(${age})`);
        return age;
    }, timeout); 
    }
    else throw age;
}

async function asyncCheckAdult(age) {
    if(age >= 20) {
    return age;
    }
    else throw age;
} 


//await : async 함수가 종료될 떄 까지 기다린다.

//promise를 더 쉽게 쓰기위해 async await ↑사용↑↑↑↑↑↑

// function asynceCheckAdult(age) {
//     return new Promise((resolve, reject)=>{
//         if(age >= 20) resolve(age);
//         else reject(age);
//     })
// }
async function testAsyncAwaitFunc() {


//존나 큰 코드라 10초걸리는 코드야. 그니까 밑에꺼 먼저 비동기때려.
await asyncTimeOutCheckAdult(10000, 10000); //원래라면 얘가 실행안되면 밑도 실행안되는데 얘는 밑에먼저 실행
// await asyncCheckAdult(10);      

asyncTimeOutCheckAdult(2000, 2000) //await 때문이 아니라 그냥 셋타임때문에 그런거아님?

const promiseCheckAdult = asyncCheckAdult(100); //21

promiseCheckAdult.then((age)=>{
    console.log(`${age} is adult`)
}).catch((age)=>{
    console.log(`${age} is kid`);
})

const promiseCheckAdult1 = asyncCheckAdult(19); //10일 때도 21먼저 출력

promiseCheckAdult1.then((age)=>{
    console.log(`${age} is adult`)
}).catch((age)=>{
    console.log(`${age} is kid`);
});

}

testAsyncAwaitFunc();

    // const promise = new Promise((resolve, reject)=>{
    //     reject("reject");
    //     resolve("resolve"); //둘중 하나 성공 아니면 실패만 찍히는데 이때 성공케이스가 위에 있어야 함
    // });

    // promise.catch((data)=>{
    //     console.log(data);
    // })

    // promise.then(()=>{
    //         console.log("promise then called");
    //     }).catch(()=>{
    //         console.log("promise catch called");
    //     });

// function testFunc1() {
//     //동기처리↓↓↓↓↓↓↓↓↓↓↓↓↓
//     console.log('testFunc1()');
    
//     let startTime = new Date().getTime();
//     while(new Date().getTime() - startTime < 1000);

//     // setTimeout(()=>{
//     //     testFunc2()
//     // }, 1000)
//     testFunc2();
// }

// function testFunc2() {
//     console.log('testFunc2()');
// }

// testFunc1();