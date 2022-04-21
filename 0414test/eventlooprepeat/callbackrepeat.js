function 아반테() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("아반테 ㄱㄱ");
        }, 1000)
    })
}

function 소나타() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("소나타 ㄱㄱ");
        }, 2000)
    })
}

function 제네시스() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("제네시스");
        }, 3000)
    })
}

아반테().then((data)=>{
    console.log(data)
    return 소나타();
}).then((data)=>{
    console.log(data);
    return 제네시스();
}).then((data)=>{
    console.log(data);
})