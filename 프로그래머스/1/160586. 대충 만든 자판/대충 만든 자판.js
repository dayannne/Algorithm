function solution(keymap, targets) {
    // keymap에서 순회하여 입력하려는 알파벳의 인덱스가 가장 작은 키를 선택해서 입력
    // targets를 완성할 수 없으면 -1
    // target 반복 - keymap 반복 (keymap 내 문자열 인덱스(키번호),문자열 내 알파벳 인덱스(입력횟수))
    let answer = [];
    for(const target of targets){
        let count = 0
        for(const s of target){
            // 해당 알파벳이 없는 문자열을 제외하고 걸러내기
            const key = keymap.filter(str => str.indexOf(s) > -1).map(str => str.indexOf(s) + 1 )
            if(!key.length) {
                count = -1
                break
            }
            else count += Math.min(...key)
        }
        answer.push(count)
    }
    
    return answer;
}