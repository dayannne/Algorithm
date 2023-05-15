function solution(sides) {
sides.sort((a,b) => a-b);
    let min = sides[1] - sides[0] + 1; // 삼각형이 될 수 있는 수의 시작 부분
    let max = sides[1] + sides[0] - 1; // 삼각형이 될 수 있는 수의 마지막 부분
    let answer = max - min + 1;
    return answer;

}