function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    
    let truck_passed = [] // 지나간 트럭
    let currWeight = 0 // 건너고 있는 트럭 총 무게
    const length = truck_weights.length // 전체 트럭 개수
    const startTime = new Array(length).fill(0) // 건너기 시작한 시간 
    
    let waitIdx = 0 // 건너려고 대기 중인 트럭 인덱스
    let passingIdx = 0  // 건너고 있는 첫번째 트럭 인덱스
    
    while(truck_passed.length < length){ 
        if(time - startTime[passingIdx] === bridge_length){ // 건너고 있는 첫번째 트럭이 다리를 지나감
            const passing_truck = truck_weights[passingIdx] // 건너고 있는 첫번째 트럭
            truck_passed.push(passing_truck)
            currWeight -= passing_truck
            passingIdx++
        }

        const truck_weight = truck_weights[waitIdx] // 건너려고 대기 중인 트럭 무게
        if(currWeight + truck_weight <= weight){  // 다리를 건널 수 있음
            currWeight += truck_weight
            startTime[waitIdx] = time
            waitIdx++
        }
        time++
    }
    
    return time;
}