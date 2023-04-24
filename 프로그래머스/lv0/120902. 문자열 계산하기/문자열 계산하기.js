function solution(my_string) {
    const calcArr = my_string.split(' ');
    let answer = parseInt(calcArr[0])

calcArr.forEach((word,index) => {
    if(word ==='+'){
        answer+= parseInt(calcArr[index+1])
    }else if(word === '-'){
        answer-= parseInt(calcArr[index+1])
    }
})
return answer
}
    