function solution(array) {
    let map = new Map()
 
    if (array.length === 1){
        return array[0];
    }
    
    for (let i = 0 ; i <= Math.max(...array); i++)
        {
            map.set(i,0);
        }
    
    for (let i = 0; i < array.length; i ++){
        map.set(array[i], map.get(array[i]) + 1);
    }
    
    const count = Array.from(map.values());
    const max = Math.max(...count);
    
    if(count.indexOf(max) !== count.lastIndexOf(max)){
        return -1;
    }else{
         return count.indexOf(max);
    }
   
   
}