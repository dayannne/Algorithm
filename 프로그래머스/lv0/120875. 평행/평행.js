function solution(dots) {
    let cnt = 0
    for(let i = 1; i < dots.length ; i++){
          const arr1 = dots.filter(dot => dot === dots[0] || dot === dots[i])
          const arr2 = dots.filter(dot => dot !== dots[0] && dot !== dots[i])
          const line1ang = (Math.abs(arr1[0][0]-arr1[1][0])) / (Math.abs(arr1[0][1]-arr1[1][1]))
          const line2ang = (Math.abs(arr2[0][0]-arr2[1][0])) / (Math.abs(arr2[0][1]-arr2[1][1]))
          
          if(line1ang===line2ang)cnt++
    }
return cnt ? 1 : 0
}