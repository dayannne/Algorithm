function solution(chicken) {
    if (chicken * 0.1 < 1) {
        return 0;
    }
    
    return Math.round(chicken / 10) + solution(Math.floor(chicken / 10));
}