// 문자열을 u와 v로 분리
function separate(str) {
    let count = 0;
    let i;
    for (i = 0; i < str.length; i++) {
        if (str[i] === '(') count++;
        else count--;
        if (count === 0) break;
    }
    return [str.slice(0, i + 1), str.slice(i + 1)];
}

// 올바른 괄호 문자열인지 확인
function isCorrect(str) {
    let count = 0;
    for (const char of str) {
        if (char === '(') count++;
        else count--;
        if (count < 0) return false;
    }
    return count === 0;
}

// 괄호 방향 뒤집기
function reverse(str) {
    return str.split('').map(char => char === '(' ? ')' : '(').join('');
}

function solution(p) {
    if (p.length === 0) return "";
    const [u, v] = separate(p);
    
    // 문자열 u가 "올바른 괄호 문자열" 이라면
    if (isCorrect(u)) {
        // 문자열 v에 대해 1단계부터 다시 수행
        return u + solution(v);
    } else {
        // 문자열 u가 "올바른 괄호 문자열"이 아니라면
        let result = '('; 
        result += solution(v); 
        result += ')';
        // u의 첫 번째와 마지막 문자를 제거, 나머지 문자열의 괄호 방향을 뒤집어 붙이기
        result += reverse(u.slice(1, -1));
        return result;
    }
}


