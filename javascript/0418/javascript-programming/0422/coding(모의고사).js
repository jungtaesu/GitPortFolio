var answers = [1,3,2,4,2,1,3,2,4,2]

function solution(answers) {
    let answer = [];

    // let answercount = 0;
    let answercountA = 0;
    let answercountB = 0;

    // const quitter = [1,2,3,4,5,1,2,3,4,5];
    const quitterA = [2,1,2,3,2,4,2,5,2,1];
    const quitterB = [3,3,1,1,2,2,4,4,5,5];

    // for(let i = 0; i < answers.length; i++){
    //     if(answers[i] == quitter[i])
    //         answercount++;
    // }

    for(let i = 0; i < answers.length; i++){
        if(answers[i] == quitterA[i])
            answercountA++;
    }

    for(let i = 0; i < answers.length; i++){
        if(answers[i] == quitterB[i])
            answercountB++;
    }

    var maxNum = Math.max( answercountA, answercountB)
    
    let count = [ answercountA, answercountB];

    for(let i = 0; i < count.length; i++){
        if(maxNum == count[i]) {
            answer.push(i + 1);
        }
    }

    // console.log(answercount);    
    console.log(answercountA);    
    console.log(answercountB);    
    console.log("maxNum:", maxNum);
    console.log("answer: ", answer);
    return answer;
}


solution(answers);