// function 아반테() {
//     console.log('아반테 ㄱㄱ');
// }

// function 소나타() {
//     console.log('소나타 ㄱㄱ');
// }

// function 제네시스() {
//     console.log('제네시스 ㄱㄱ');   
// }

// setTimeout(아반테, 1000);
// setTimeout(소나타, 2000);
// setTimeout(제네시스, 3000);


// function 아반테(callback) {
//     console.log('아반테 ㄱㄱ');
//     callback();
// }

// function 소나타(callback) {
//     console.log('소나타 ㄱㄱ');
//     callback();
// }

// function 제네시스() {
//     console.log('제네시스 ㄱㄱ');   
// }

// function 자동차경주() {

//         아반테(()=>{
//             소나타(()=>{
//                 제네시스();
//             })
//         })
//     }


// 자동차경주();

// function 아반떼(callback) {
//     setTimeout(()=>{
//         console.log('아반떼')
//         callback()
//     }, 1000)
// }

// function 소나타(callback) {
//     setTimeout(()=>{
//         console.log('소나타')
//         callback()
//     }, 2000)
// }

// function 제네시스() {
//     setTimeout(()=>{
//         console.log('제네시스')
//         // callback()
//     }, 3000)
// }

// 아반떼(()=>{소나타(제네시스)});

// function 아반테(callback) {
//     setTimeout(()=>{
//         callback();
//         console.log('아반테');
        
//     }, 1000)
// }

// function 소나타(callback) {
//     setTimeout(()=>{
//         callback();
//         console.log('소나타');
        
//     }, 2000)
// }

// function 제네시스() {
//     setTimeout(()=>{
//         console.log('제네시스')
//     }, 3000)
// }

// 아반테(()=>{소나타(제네시스)});

function 아반테() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('아반테');
        }, 1000)
    })
}

function 소나타() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('소나타');
        }, 2000)
    })
}

function 제네시스() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('제네시스');
        }, 3000)
    })
}

아반테().then((data)=>{
    console.log(data);
    return 소나타();
}).then((data)=>{
    console.log(data);
    return 제네시스();
}).then((data)=>{
    console.log(data);
})