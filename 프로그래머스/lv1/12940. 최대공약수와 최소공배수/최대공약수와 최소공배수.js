function solution(n, m) {
    // 최대공약수 - 둘다 모두 나눠서 0이 되는 가장 큰 수
    // 최소공배수 - 두 수를 곱해 최대 공약 수로 나눈 값
    let a = 0, b = 0
    for(let i = 1 ; i <= Math.max(n,m) ; i++){
        if(n % i === 0 && m % i === 0 ){
            a = i
        }
    }
    b = (n * m) / a 
    return [a,b];
}