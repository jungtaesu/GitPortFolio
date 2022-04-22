function setTimeoutPromise(timeout) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve(); 
        }, timeout);
    })
}

// async await
async function timeoutCheckAdult(age, timeout) {
    
    console.log(`${age}. timeoutCheckAdult`);
    await setTimeoutPromise(timeout);
    console.log(`${age}. timeoutCheckAdult`);

    if (age > 20) return true;
    return false;
}

async function asyncCheckAdult(age) {
    if (age >= 20)  { return age; }
    else throw new Error(age);
}

// await 키워드 사용 함수의 종료를 기다리지 않고 다음 함수를 호출한다.

// function asyncCheckAdult(age) {
//     return new Promise((resolve, reject) => {
//         if (age >= 20)  resolve(age);
//         else    reject(age);
//     })
// }

async function testAsyncAwaitFunc() 
{
    // timeoutCheckAdult(10, 4000);
    // timeoutCheckAdult(20, 2000);
    // timeoutCheckAdult(30, 1000);

    await timeoutCheckAdult(10, 4000);
    await timeoutCheckAdult(20, 2000);
    await timeoutCheckAdult(30, 1000);


    // let promises = [];

    // promises.push(timeoutCheckAdult(10, 8000));
    // promises.push(timeoutCheckAdult(20, 5000));
    // promises.push(timeoutCheckAdult(30, 1000));

    // let results = await Promise.all(promises);
    // console.log(results);


    // const promiseCheckAdult = asyncCheckAdult(10);
    // promiseCheckAdult.then((age) => {
    //     console.log(`${age} is adult!!`);
    // }).catch((age) => {
    //     console.log(`${age} is not adult!!`);
    // });
    
    // const promiseCheckAdult1 = asyncCheckAdult(21);
    // promiseCheckAdult1.then((age) => {
    //     console.log(`${age} is adult!!`);
    // }).catch((age) => {
    //     console.log(`${age} is not adult!!`);
    // });
}

testAsyncAwaitFunc();
