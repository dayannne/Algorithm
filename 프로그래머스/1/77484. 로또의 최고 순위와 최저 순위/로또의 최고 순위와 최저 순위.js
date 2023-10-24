function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1]; // 등수에 따른 매칭 개수
    let matchCount = 0; // 일치하는 번호 개수
    let zeroCount = 0; // 0의 개수

    // 일치하는 번호 개수와 0의 개수를 계산
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) {
            zeroCount++;
        } else if (win_nums.includes(lottos[i])) {
            matchCount++;
        }
    }

    // 최고 순위와 최저 순위 계산
    const maxRank = rank[matchCount + zeroCount];
    const minRank = rank[matchCount];

    return [maxRank, minRank];
}