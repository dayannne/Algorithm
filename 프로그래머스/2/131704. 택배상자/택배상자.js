function solution(order) {
    // 1. 기존 컨베이어 벨트에는 1번부터 n까지의 상자가 오름차순으로 영재에게 옴
    // 2. 배열 'order'는 택배 기사님이 원하는 상자 순서를 나타내는 정수 배열
    // 3. '기존 컨베이어 벨트'에서 온 상자가 택배 기사님이 원하는 상자가 아닐 경우, 
    //    '보조 컨베이어 벨트'에 올려놓을 수 있음 (보조 컨베이어 벨트 = 스택)

    let conveyor = [] // 상자를 담을 기존컨베이어 벨트
    const subConveyor = [] // 보조 컨베이어 벨트
    const boxes = Array(order.length).fill(0).map((_,i) => i+1).sort((a,b) => b - a)  // 상자 순서
    
    let i = 0 // order index
    
    while(i < order.length){
        const wantNum = order[i]
        const boxNum = boxes[boxes.length - 1]
        const subBoxNum = subConveyor[subConveyor.length-1]

        if(wantNum === subBoxNum){
            conveyor.push(subConveyor.pop())
            i++
            continue
        }else if(wantNum < subBoxNum){ 
            // 원하는 상자번호가 sub에 담긴 것보다 작으면 더이상 담을 수 없음 (보조 컨베이어 벨트 = 스택이므로)
            return conveyor.length
        }
        
        if(wantNum === boxNum){
            conveyor.push(boxes.pop())
            i++
        }else{
            subConveyor.push(boxes.pop())
        }
    }
    
    return conveyor.length;
}