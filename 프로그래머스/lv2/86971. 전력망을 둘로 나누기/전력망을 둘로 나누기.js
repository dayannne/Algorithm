function solution(n, wires) {
    // 1) 연결이 가장 많이 된 송전탑을 끊기?
    // 2) 완전 탐색으로 다 세봐서 가장 비슷하게 나눠진 경우의 차이 절대값을 리턴
    //    둘로 나눠졌다는 것을 어떻게 확인하지? -> 그룹 A, B로 나눠서 카운트!
    
    let answer = 100; // 최대 송전탑 개수
    
    for (let i = 0 ; i < wires.length ; i++){
        const copyWires = [...wires]; // wires 복제하기
    const [cutWire] = copyWires.splice(i, 1); // 한 개의 wire를 제거
        const A = new Set([cutWire[0]]); // 트리 A
        const B = new Set([cutWire[1]]); // 트리 B
        
        while (copyWires.length > 0) {
            let isConnected = false;
            for (let j = 0; j < copyWires.length; j++) {
                const currWire = copyWires[j];
                if (A.has(currWire[0]) || A.has(currWire[1])) {
                    A.add(currWire[0]);
                    A.add(currWire[1]);
                    copyWires.splice(j, 1);
                    isConnected = true;
                    break;
                } else if (B.has(currWire[0]) || B.has(currWire[1])) {
                    B.add(currWire[0]);
                    B.add(currWire[1]);
                    copyWires.splice(j, 1);
                    isConnected = true;
                    break;
                }
            }

            if (!isConnected) break;
        }
        
console.log(A,B)
        const diff = Math.abs(A.size - B.size) 
         if(diff < answer){
          answer = diff
         }
    }
    return answer ;
}