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

async function testAsyncAwaitFunc() 
{
    // timeoutCheckAdult(10, 4000);
    // timeoutCheckAdult(20, 2000);
    // timeoutCheckAdult(30, 1000);

    await timeoutCheckAdult(10, 4000);
    await timeoutCheckAdult(20, 2000);
    await timeoutCheckAdult(30, 1000);
}

testAsyncAwaitFunc();
