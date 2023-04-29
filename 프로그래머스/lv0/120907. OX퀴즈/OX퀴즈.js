function solution(quiz) {
    var answer = [];
    for(let x of quiz){
        const splitArr = x.split(' ')
        const result = 
              splitArr.includes('-') 
        ? parseInt(splitArr[0]) - parseInt(splitArr[2]) 
        : parseInt(splitArr[0]) + parseInt(splitArr[2]) 
        console.log(result)
        answer.push(parseInt(splitArr[splitArr.length-1]) === result ? "O" : "X")
    }
    return answer;
}