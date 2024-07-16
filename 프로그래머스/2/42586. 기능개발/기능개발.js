function solution(progresses, speeds) {

    const length = progresses.length;
    const periods = Array(length).fill(0) // 기능마다 걸리는 기간
    const answer = [] // 각 배포마다 몇 개의 기능이 배포되는지
    
    // 기능마다 걸리는 기간 계산
    for(let i = 0 ; i < length ; i++){
        periods[i] = Math.ceil((100 - progresses[i]) / speeds[i])
    }
    
    let maxPeriod = periods[0]
    let count = 1 // 각 배포마다 기능 카운트
    
    for(let i = 1 ; i < length ; i++){
        if(periods[i] <= maxPeriod){ // 이전 기능의 작업 기간안에 포함될 때
            count++
        }else{
            maxPeriod = periods[i]
            answer.push(count)
            count = 1
        }
    }
    answer.push(count) // 마지막 배포 count 넣기
    return answer;
}