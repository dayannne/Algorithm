function solution(n, lost, reserve) {
    let arr = new Array(n).fill(1)
    arr = arr.map((s, index) => {
        if(lost.includes(index+1)){
            s--
        }
        if(reserve.includes(index+1)){
            s++
        }
        return s
    })
    for(let i = 0; i< arr.length; i++)
        {
            if(arr[i] === 0){
                if(i >= 1 && arr[i-1] === 2){
                    arr[i-1]--
                    arr[i]++
                    continue
                }
                if(i <= arr.length-1 && arr[i+1] === 2){
                    arr[i]++
                    arr[i+1]--
                }
            }
        }
    let answer = arr.filter(s => s>0).length
    return answer;
}