function solution(fees, records) {
    var answer = [];
    const defaultTime = fees[0] // 기본 시간(분)
    const defaultFee = fees[1] // 기본 요금(원)
    const unitTime = fees[2] // 단위 시간(분)
    const unitFee = fees[3] // 단위 요금(원)
    const lastTime = 1439 // 23:59
    
    // records를 [분 단위 시간, 차량번호, 내역] 형태로 변환
    records = records.map((record) => {
        const arr = record.split(' ')
        arr[0] = arr[0].split(':')
        arr[0] = parseInt(arr[0][0]) * 60 + parseInt(arr[0][1])
        return arr
    })
    
    const lookup = {}
    
    // lookup에 '차량 번호 : [시간, 내역]'의 형태로 저장
    for(const record of records){
        const time = record[0] // 시각
        const carNumber = record[1] // 차량 번호
        const history = record[2] // 내역
        if(lookup[carNumber]){
            if(history === "IN"){
                lookup[carNumber][0] -= time
                lookup[carNumber][1] = "IN"
            }else if (history === "OUT"){
                lookup[carNumber][0] += time 
                lookup[carNumber][1] = "OUT"
            }
        }else{
            lookup[carNumber] = [-time , "IN"]
        }
    }
   
    // 처음엔 누적 시간 배열이 들어가고 -> for문을 통해 계산한 주차 요금으로 변환
    const parkingFees = Object.entries(lookup)
                        .sort((a,b) => a[0] - b[0]) // 차량번호 오름차순 정렬
 
    for(let i = 0 ; i < parkingFees.length ; i++){
        const history = parkingFees[i][1][1]
        const sumTime = history === "IN" ? lastTime + parkingFees[i][1][0] : parkingFees[i][1][0]

        parkingFees[i] = sumTime <= defaultTime 
                            ? defaultFee
                            : defaultFee + (Math.ceil((sumTime - defaultTime) / unitTime) * unitFee)
    }

    return parkingFees;
}