function solution(s){
    const arr = s.toLowerCase().split('')
    const p = arr.filter(s=>s === 'p').length
    const y = arr.filter(s=>s === 'y').length

    return p === y ? true : false;
}