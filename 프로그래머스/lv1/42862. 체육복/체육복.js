function solution(n, lost, reserve) {
	// lost = 0, reserve = 2, 그 외(lost이지만 reserve인 경우 포함) = 1
	let arr = new Array(n).fill(1); // 기본 1로 세팅
	arr = arr.map((s, index) => {
		if (lost.includes(index + 1)) s--; // lost에 속하는 경우 --
		if (reserve.includes(index + 1)) s++; // reserve에 속하는 경우 ++
		return s;
	});
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			// 0일 경우
			if (i >= 1 && arr[i - 1] === 2) {
				// 왼쪽이 reserve인 경우
				arr[i - 1]--;
				arr[i]++;
				continue;
			}
			if (i <= arr.length - 1 && arr[i + 1] === 2) {
				// 오른쪽이 reserve인 경우
				arr[i]++;
				arr[i + 1]--;
			}
		}
	}
	let answer = arr.filter((s) => s > 0).length;
	return answer;
}
