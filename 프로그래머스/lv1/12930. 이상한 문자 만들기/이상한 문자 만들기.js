function solution(s) {
 const answer = s.split(' ').map(word => {
     return word.split('').map((str, index) => {
         return index % 2 === 0 ? str.toUpperCase() : str.toLowerCase()
     }).join('')
 }).join(' ')
    return answer;
}