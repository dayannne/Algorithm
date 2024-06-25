function solution(arr) {
    var answer = 0;
    let num = arr[arr.length-1];
    let cnt = 1;
    let check = 0;
    let multiple = 0
    while(check!==arr.length){
        multiple = cnt*num;
        check = 0;
       
        arr.forEach((e)=>{
            if(multiple % e === 0){
                check+=1
            }
        })
        cnt++;
    }
       
    return multiple;
}