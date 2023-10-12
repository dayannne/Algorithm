function isPrime(num) {
	let arr = Array(num + 1).fill(true);
    
    arr[0] = 0;
    arr[1] = 0;

    for(let i = 2; i * i <= num; i++) { //제곱근까지만 반복
        if(arr[i]) {
            for(let j = i * i; j <= num; j += i) {
                //반복을 i * i 부터 시작하는 것은 그 이전의 값은 j이전의 수에서 이미 확인했기 때문
                arr[j] = 0; //배수이므로 소수가 아닌것으로 만든다.
            }
        }
    }
    return arr.filter(el => el).length //filter로 arr중 값이 true인 것의 개수를 구한다.
}

function solution(n) {
    const answer = isPrime(n);
    return answer;
}
