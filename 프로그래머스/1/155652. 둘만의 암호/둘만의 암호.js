function solution(s, skip, index) {
    // 아스키코드 활용 .charCodeAt(0)
    // z(122)를 넘어갈 경우 다시 a(65)로
    // 알파벳 하나마다 알파벳 5개가 들어간 배열 생성 후 마지막에 위치한 배열 추가
    let answer = '';
    for(const alphabet of s){
        let curr = alphabet.charCodeAt(0) // 아스키코드
        const arr = []
        while(arr.length < index){
            if(curr+1 === 123) curr = 97
            else curr++
            let next = String.fromCharCode(curr)
            if(skip.indexOf(next) > -1) continue
            arr.push(String.fromCharCode(curr))
        }
        answer += arr[arr.length-1]
    }
    return answer;
}