function solution(participant, completion) {
    let arr1 = participant.sort()
    let arr2 = completion.sort()
    let answer = arr1.filter((x,i)=> arr1[i] !== arr2[i]);
  
    return answer[0];
}