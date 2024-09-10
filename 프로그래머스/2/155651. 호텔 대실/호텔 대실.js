function solution(book_time) {
    let roomNum = 1
    let lookup = {}
    
    // 시간 문자열을 분 단위 숫자로 변경
    book_time = book_time.map(([start,end])=>{
        let [startH,startM] = start.split(':').map(Number)
        let [endH,endM] = end.split(':').map(Number)
        const newStart = startH * 60 + startM
        const newEnd = endH * 60 + endM
        return [newStart,newEnd]
    })
    // 숫자 정렬 (시작 시간 오름차순 -> 끝나는 시간 내림차순)
    book_time.sort((a,b)=> a[0] - b[0] || b[1] - a[1])
    
    // 초기값 설정
    lookup[roomNum] = [book_time[0]]
    
    for(let i = 1 ; i < book_time.length ; i++){
        for(let j = 1 ; j <= roomNum ; j++){
            const reserved = lookup[j]
            const reserved_end = reserved[reserved.length - 1][1]
            // 예약할 시작시간 < 가장 최근 예약 종료시간 + 10
            if(book_time[i][0] < reserved_end + 10){
                if(j === roomNum){ 
                    lookup[++roomNum] = [book_time[i]]
                    break
                }
            }else{
                reserved.push(book_time[i])
                break
            }
        }
    }

    
    return roomNum;
}