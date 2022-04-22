/*
    비동기처리 new Promise 호출과 동시에 비동기처리 시작
*/

async function asynceCheckAdult(age) {
    if(age >= 20) return age;
    else throw age;
} 
//promise를 더 쉽게 쓰기위해 async await ↑사용↑↑↑↑↑↑

// function asynceCheckAdult(age) {
//     return new Promise((resolve, reject)=>{
//         if(age >= 20) resolve(age);
//         else reject(age);
//     })
// }

const promiseCheckAdult = asynceCheckAdult(10); //21

promiseCheckAdult.then((age)=>{
    console.log(`${age} is adult`)
}).catch((age)=>{
    console.log(`${age} is kid`);
})

const promiseCheckAdult1 = asynceCheckAdult(21); //10일 때도 21먼저 출력

promiseCheckAdult1.then((age)=>{
    console.log(`${age} is adult`)
}).catch((age)=>{
    console.log(`${age} is kid`);
})

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