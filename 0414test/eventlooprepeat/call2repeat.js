const 아반테 = (callback) => {
    console.log("아반테 ㄱㄱ");
    callback();
}

const 소나타 = (callback) => {
    console.log("소나타 ㄱㄱ");
    callback();
}

const 제네시스 = () => {
    console.log("제네시스");
}

// const 자동차경주 = () => {
//     아반테(()=>{
//         소나타(()=>{
//             제네시스()
//         })
//     })
// }

// 자동차경주();

function 자동차경주() {
    아반테(()=>{
        소나타(()=>{
            제네시스()
        })
    })
}
자동차경주();