function solution(bridge_length, weight, truck_weights) {
    let time = 0; // 경과 시간
    let bridge = Array(bridge_length).fill(0); // 다리를 나타내는 큐
    let bridgeWeight = 0; // 현재 다리 위 트럭 무게 합

    while(truck_weights.length > 0 || bridgeWeight > 0){
        time++;
        
        // 1. 다리에서 트럭 하나 내려오기
        bridgeWeight -= bridge.shift();

        // 2. 새 트럭 올릴 수 있는지 확인
        if(truck_weights.length > 0){
            if(bridgeWeight + truck_weights[0] <= weight){
                // 트럭 올라감
                let truck = truck_weights.shift();
                bridge.push(truck);
                bridgeWeight += truck;
            }else{
                // 무게 초과 → 빈 공간(0) 넣기
                bridge.push(0);
            }
        }
    }
    return time;
}
