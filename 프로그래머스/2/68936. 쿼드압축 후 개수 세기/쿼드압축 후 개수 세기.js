function solution(arr) {
    function compress(x, y, size) {
        let initial = arr[x][y];
        let allSame = true;

        // 영역 내 모든 값이 동일한지 확인
        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (arr[i][j] !== initial) {
                    allSame = false;
                    break;
                }
            }
            if (!allSame) break;
        }

        if (allSame) {
            // 모두 같은 경우
            if (initial === 0) {
                return [1, 0]; // 0의 개수 증가
            } else {
                return [0, 1]; // 1의 개수 증가
            }
        } else {
            // 4개의 영역으로 나누어 재귀적으로 처리
            let halfSize = Math.floor(size / 2);
            let topLeft = compress(x, y, halfSize);
            let topRight = compress(x, y + halfSize, halfSize);
            let bottomLeft = compress(x + halfSize, y, halfSize);
            let bottomRight = compress(x + halfSize, y + halfSize, halfSize);

            return [
                topLeft[0] + topRight[0] + bottomLeft[0] + bottomRight[0],
                topLeft[1] + topRight[1] + bottomLeft[1] + bottomRight[1]
            ];
        }
    }

    // 배열 전체에 대해 압축 시작
    return compress(0, 0, arr.length);
}
