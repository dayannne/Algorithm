function solution(arr1, arr2) {
    arr1 = arr1.map((nums,i) => nums.map((n,j) => n + arr2[i][j]));
    return arr1;
}