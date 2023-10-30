function solution(s) {
    /* 문제 해석
    첫문자 가 a라고 하면 읽으면서 a의 개수를 카운트하고 a와 다른 문자를 합산(!!)해서 카운트 합니다. 
    문자마다 각각 세는게 아님 b가 두번 c가 두번 나오면 다른글자들이 나온 횟수는 4가 되는거임
    예시 3번 같은 경우
    aaabbaccccabba a가 첫문자고 하나씩 읽다보면 a의 개수가 4가 되고 다른 문자들의 카운트가 모두 4가되는 시점에 분리합니다.
    aaabbacc 첫문자 a의 개수와 다른 문자들의 합이 4개로 같아 지는 시점에 분리 합니다.*/

    let answer = 0 // 분해한 문자열의 개수
    let curr = s[0] // 현재 비교 기준 알파벳
    let currCount = 0; // 현재 기준 알파벳 카운트
    let otherCount = 0; // 나머지 알파벳 카운트
    
    // 순회하면서 알파벳 카운트, curr과 다른 문자들의 카운트 합이 같을 때 분리, curr 초기화
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === curr){
            currCount++;
        }else{
            otherCount++;
        }
        if(i === s.length-1 && currCount !== otherCount){
            answer ++
            break
        }
        
        if(currCount === otherCount){
            answer++
            if(i + 1 < s.length){ 
                curr = s[i+1];
                currCount=0;
                otherCount=0;
            }
        }
    }
    return answer;
}