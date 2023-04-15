/* 
h = 1 1이 넘는 숫자가 1개 이상인가
h =2
...
h = 4 (x)
=> h ==> 3
*/


function solution(citations) {
    let answers = 0;
    citations.sort((a, b) => b - a);
    // [6,5,3,1,0]
    // i번째 숫자가 i 이상이면 -> i이상인 숫자가 i개 이상이다. 
    for (let i = 0; i < citations.length; i++) {
        let count = i +1
        let number = citations[i]
        if (count>= i && number > i) {
            answers = i + 1;
        }else break;

    }

    return answers;
}