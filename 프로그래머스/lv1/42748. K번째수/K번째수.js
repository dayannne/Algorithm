function solution(array, commands) {
    let answer = []
    let copyArr = array.slice()
      
    for (let i = 0; i < commands.length ; i++){
         // 자르고
         let sliceArr = copyArr.slice(commands[i][0]-1,commands[i][1])
         // 정렬하고
         sliceArr.sort((a,b)=>a-b)
        // 푸시
           answer.push(sliceArr[commands[i][2]-1])   
    }

    

    return answer;
}