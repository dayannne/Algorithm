function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
    let sortNumbers = numbers.split('').sort((a,b)=> b-a);
    let numCombs = [] // 숫자 조합을 저장하는 곳
    let max = '' // 나올 수 있는 가장 큰 값을 저장, [1,7]이라면 71이 저장됨
    let cnt = 0
    for(let x of sortNumbers){
        max+= x
    }
    max = parseInt(max)
    
    // max까지 for문 돌리기
    // 포함된 것을 빼면서 배열이 0인 경우가 되었을 때에만 push(i)
    for(let i = 0 ; i <= max; i++){
        let num =i+''
      for(let x of numbers){
            if(num.includes(x)){
                num = num.replace(x,'') // 1개만 바꾸는 replace사용
            }
        }
        if(num.length === 0){
            numCombs.push(parseInt(i))
        }
    }
    // 소수 판별
      for (let x of numCombs) {
    if (isPrime(x)) {

     cnt++}
          ;
  }
    return cnt;
}