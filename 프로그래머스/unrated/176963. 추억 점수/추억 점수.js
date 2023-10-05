function solution(name, yearning, photo) {
    var answer = [];
    for(let i =0; i < photo.length ; i++){
        for( let j = 0 ; j< photo[i].length ; j++){
            const index = name.indexOf(photo[i][j])
            if(index > -1){
                photo[i][j] = yearning[index]
            }else{
                photo[i][j] = 0
            }
        }
        answer.push(photo[i].reduce((a,c)=> a + c))
    }
    return answer;
}