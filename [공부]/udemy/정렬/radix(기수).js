// 숫자에서 i 자릿수의 값을 반환
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// 숫자 자릿수 반환
function digitCount(num) {
  if (num === 0) return 1; // 0을 아래에서 계산하면 -Infinity가 반환되므로 이렇게 조건 달아줌
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// 최대 자릿수 반환
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums); // 최대 자릿수
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []); // 이중 배열을 10개만큼 만듦

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    nums = [].concat(...digitBuckets); // 1차원 배열로 합침
  } // for문 종료

  return nums;
}
