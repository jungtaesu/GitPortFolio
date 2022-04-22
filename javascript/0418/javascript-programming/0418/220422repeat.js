function setTimeoutPromise(timeout) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        }, timeout)
    })
}

// async function timeoutCheckAdult(age, timeout) {
//     console.log(`${age}. check`)
//     await setTimeoutPromise(timeout);
//     console.log(`${age} check`)

//     if(age > 20) return true;
//     return false;
// }

async function timeoutCheckAdult(age, timeout) {
    console.log(`${age}. check`)
    await setTimeoutPromise(timeout);
    console.log(`${age} check`)

    if(age > 20) return true;
    return false;
}

async function test() {
    // await timeoutCheckAdult(10, 3000);
    // await timeoutCheckAdult(20, 2000);
    // await timeoutCheckAdult(30, 1000);

   await timeoutCheckAdult(10, 3000);
    await timeoutCheckAdult(20, 2000);
    await timeoutCheckAdult(30, 1000);

}

test();

//await 있고 없을때 차이.