function solution(brown, yellow) {
    // 1) 나눌 값(세로 길이=i)이 나눠진 값(가로 길이= yellow / i) 보다 크지 않도록
    // 2) 양쪽에 둘러싸고 나누기 2가 가로 값에 딱 나눠 떨어질때? 
    const answer = [];
    let width = 0
    let height = 0
    const originalBrown = brown;
    for(let i = 1; i <= yellow / i; i++){
       
             if (yellow % i === 0) {
            width = yellow / i + 2;
            height = i + 2;
            brown = originalBrown - (i*2)
            if (brown / 2 === width) {
                answer.push(width , height);
                break;
            }
                  console.log(width,height,brown)
        }
     
        
      
       
    }

    return answer;
}