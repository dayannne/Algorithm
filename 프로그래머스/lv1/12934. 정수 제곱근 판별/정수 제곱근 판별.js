function solution(n) {
    var answer = Math.sqrt(n);
    return Number.isInteger(Math.sqrt(n)) ? (answer +1)*(answer +1) : -1;
}