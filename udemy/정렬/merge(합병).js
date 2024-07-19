function mergeSort(arr) {
  // 배열 쪼개기
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); // 왼쪽 배열 쪼개기
  let right = mergeSort(arr.slice(mid)); // 오른쪽 배열 쪼개기
  return merge(left, right);
}

// 배열을 합병해주는 함수
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // 만약 i나 j 중 하나가 해당 배열 끝에 도달했다면 남은 배열 요소를 모두 집어넣기
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
console.log(mergeSort([10, 24, 76, 73]));
