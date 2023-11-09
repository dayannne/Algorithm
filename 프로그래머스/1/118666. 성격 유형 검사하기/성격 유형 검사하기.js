function getKeyByValue(obj, key1, key2) {
    if(obj[key1] > obj[key2]){
        return key1
    }else if(obj[key1] < obj[key2]){
        return key2
    }else{
        return key1 < key2 ? key1 : key2
    }
}

function solution(survey, choices) {
    let score = [3,2,1,0,1,2,3]
    let type = {'R' : 0, 'T':0 , 'C' : 0, 'F':0, 'J':0, 'M':0 ,'A':0,'N':0};
    for(let i = 0 ; i < survey.length ; i++){
        if(choices[i] < 4){
            let curr = type[survey[i][0]]
            type[survey[i][0]] = curr + score[choices[i]-1]
        }else if(choices[i] > 4){
            let curr = type[survey[i][1]]
            type[survey[i][1]] = curr + score[choices[i]-1]
        }
    }
    const answer = getKeyByValue(type,'R','T') + getKeyByValue(type,'C','F') + getKeyByValue(type,'J','M') + getKeyByValue(type,'A','N')
    return answer;
}