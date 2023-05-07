function solution(dots) {
    // dots[0] 정렬 후 dots[1]정렬
    // = dots.sort((a,b) => a[0]-b[0]).sort((a,b) => a[1]-b[1])
    let sortDots = dots.sort((a,b) => a[0]-b[0] || a[1]-b[1])
    let width = sortDots[3][0] - sortDots[0][0];
    let height = sortDots[3][1] - sortDots[0][1];
    return width * height;
}