function 아반떼(callback) {
    console.log('아반떼 go')
    callback()        //콜스택의 차례를 보려면 console.log위치 바꿔보면 된다.

    // 위 콜백은 다음과 같다 ==
    //     소나타(()=>{
//         제네시스()
//     })
// })


}

function 소나타(callback) {

//     소나타(()=>{
//         제네시스()
//     })
// })

    console.log('소나타 go')
    callback()
}

function 제네시스() {
    console.log('제네시스')
}

// 아반떼();
// 소나타();
// 제네시스();

// setTimeout(아반떼, 1000); //비동기 코드임.
// setTimeout(소나타, 2000); //비동기
// setTimeout(제네시스, 3000); //비동기라 백그라운드에서 돌아감.

//총 걸린시간 3초

function 자동차경주() {
    아반떼(()=>{
        소나타(()=>{
            제네시스()
        })
    })
}

자동차경주();


//근데 아반떼 나온 뒤에 소나타, 이후 제네시스 나오게하려면 async await
//백그라운드 조작방법 세가지
// 1. 콜백 2.프로미스 3.async/await