function solution(s, n) {
    const answer = s.split('').map(str =>
         str.charCodeAt() === 32 ? str 
                                 : (str.charCodeAt() <= 90 && str.charCodeAt() + n > 90 )
                                   || str.charCodeAt() >= 97 && str.charCodeAt() + n > 122
                                 ? String.fromCharCode(str.charCodeAt() - 25 + n - 1)
                                 : String.fromCharCode(str.charCodeAt() + n)
        ).join('');
    return answer;
}