function solution(a, b, g, s, w, t) {
    const N = g.length;
    let [left, right] = [0, 10 ** 15];
    let mid = Math.floor((left + right) / 2);
    
    while(left <= right){
        let [gold,silver,total] = [0,0,0]
        
        for(let i = 0 ; i < N ; i++){
            const maxRemainWeight = Math.round(mid / (t[i] * 2)) * w[i];
            gold += Math.min(g[i], maxRemainWeight);
            silver += Math.min(s[i], maxRemainWeight);
            total += Math.min(g[i] + s[i] , maxRemainWeight);
        }
        if(gold >= a && silver >=b && total >= (a+b)){
                right = mid - 1
            }else{
                left = mid + 1
            }
            mid = Math.floor((left + right) / 2);
    }
    
   
    return left;
}