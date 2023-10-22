function solution(dartResult) {
    let answer = [];
    let score = 0;
    dartResult = dartResult.replace(/10/g, 'X');

    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i]) || dartResult[i] === 'X') { 
            if (i !== 0) answer.push(score);
            score = (dartResult[i] === 'X') ? 10 : Number(dartResult[i]);
        } else {
            switch(dartResult[i]) {
                case 'S':
                    break;
                case 'D':
                    score **= 2;
                    break;
                case 'T':
                    score **= 3;
                    break;
                case '*':
                    score *= 2;
                    if(answer.length) answer[answer.length -1] *=2;
                    break;
                case '#':
                    score *= -1;
                    break;             
            }
        }
        
        if(i === dartResult.length -1){
            answer.push(score);
        }
    }

    return answer.reduce((a,b)=> a+b);
}
