function solution(participant, completion) {
    // 내 풀이 : participant와 completion를 각각 오름차순 정렬 후
    // 같은 인덱스의 값을 빅해 서로 달라지는 첫번째 값을 리턴 
    // (이렇게 하면 participant에서 참여 이름이 중복으로 들어간 경우도 처리가능)
    let arr1 = participant.sort()
    let arr2 = completion.sort()
    let answer = arr1.filter((x,i)=> arr1[i] !== arr2[i]);
  
    return answer[0];
}