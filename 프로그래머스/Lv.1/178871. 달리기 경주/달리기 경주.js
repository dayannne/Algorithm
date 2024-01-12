function solution(players, callings) {
    const currPlayers = players.slice(); // 배열 복사

    const indexMap = {}; // 인덱스 매핑을 위한 객체 생성
    players.forEach((value, index) => {
        indexMap[value] = index;
    });

    for (const calling of callings) {
        const index = indexMap[calling]; // 미리 계산된 인덱스 사용
        indexMap[currPlayers[index - 1]] = index
        indexMap[currPlayers[index]] = index-1
        currPlayers[index] = currPlayers[index - 1];
        currPlayers[index - 1] = calling;
    }

    return currPlayers;
}
