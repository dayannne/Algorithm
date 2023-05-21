function solution(number, k) {
	let answer = '';
	let currIndex = 0;

	while (answer.length < number.length - k) {
		let max = -1;
		for (let i = currIndex; i <= k + answer.length; i++) {
			let num = parseInt(number[i]);
			if (num === 9) {
				max = num;
				currIndex = i + 1;
				break;
			}
			if (num > max) {
				max = num;
				currIndex = i + 1;
			}
		}
		answer += max;
	}
	return answer;
}
