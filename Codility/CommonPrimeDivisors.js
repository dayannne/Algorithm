// https://app.codility.com/demo/results/training8M82CA-9AP/

// 시간초과
function getPrime(n) {
  const primes = [];
  if (n === 1) return primes;
  let i = 2;
  while (n > 1) {
    if (n % i === 0) {
      n /= i;
      if (primes[primes.length - 1] !== i) primes.push(i);
    } else i++;
  }
  return primes;
}

function solution(A, B) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    let aPrimes = getPrime(A[i]);
    let bPrimes = getPrime(B[i]);
    if (
      aPrimes.length === bPrimes.length &&
      aPrimes.every((p) => bPrimes.includes(p))
    ) {
      count++;
    }
  }
  return count;
}

// 정답
function solution(A, B) {
  const Z = A.length;
  let cnt = 0;

  for (let i = 0; i < Z; i++) {
    if (hasSamePrimeDiv(A[i], B[i])) {
      cnt++;
    }
  }

  return cnt;

  function getGCD(A, B) {
    //최대 공약수 구하기
    if (B === 0) return A;
    return getGCD(B, A % B);
  }

  function hasSamePrimeDiv(A, B) {
    //같은 인수를 가지고 있는지 확인

    let gcd = getGCD(A, B);
    let gcdA = 0;
    let gcdB = 0;

    while (gcdA !== 1) {
      gcdA = getGCD(A, gcd);
      A = A / gcdA;
    }

    while (gcdB !== 1) {
      gcdB = getGCD(B, gcd);
      B = B / gcdB;
    }

    return A === 1 && B === 1 ? true : false; //만약 값이 1이 아니라면 그 값은 공통되지 않는 인수인 것이다.
    //또한 두 수 모두 공통된 인수를 가지고 있어야 하므로 조건식을 위와 같이 적어주었다.
  }
}
