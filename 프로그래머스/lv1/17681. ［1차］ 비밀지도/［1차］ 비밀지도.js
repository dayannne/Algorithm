function solution(n, arr1, arr2) {
    // 숫자를 이진수로 변환
    // 두 지도의 이진수를 더함 (1이 포함된 부분을 더함)
    // 1을 #으로, 0을 공백("")으로 변환
    const answer = []
    arr1 = arr1.map(num => num.toString(2).padStart(n,'0'));
    arr2 = arr2.map(num => num.toString(2).padStart(n,'0'));

    for(let i = 0 ; i < n ; i++){
        let temp = arr1[i].split('')
        for(let j = 0 ; j < n ; j ++){
             if(temp[j] !== '1' && arr1[i][j] !== arr2[i][j]){
                 temp[j] = '1'
             }
        }
        temp = temp.join('').replaceAll('0',' ').replaceAll('1','#')
        answer.push(temp)
    }
    return answer;
}