function solution(numer1, denom1, numer2, denom2) {
    let denom = denom1 * denom2;
    let numer = numer1 *denom2 +  numer2*denom1;
    let maximum = 1;
    
    for(let i = 0; i<=denom ; i++){
        if(denom%i==0 && numer%i==0){
            maximum = i;
        }
    }
        
    return [numer/maximum,denom/maximum]
}
        
