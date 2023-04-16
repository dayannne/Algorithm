function solution(my_string) {
    let answer = []
    for (let i = 0; i < my_string.length; i++){

        if(!isNaN(parseInt(my_string[i]))){
            answer.push(parseInt(my_string[i]))
        }
    }
    return answer.sort();
}