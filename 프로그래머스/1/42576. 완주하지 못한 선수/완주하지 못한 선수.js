function solution(participant, completion) {
    const map = new Map();
    // 참여자
    for(const name of participant){
        map.set(name, (map.get(name) || 0)+1)
    }
    // 완주자
    for(const name of completion){
        map.set(name, map.get(name) - 1)
    }
    // 남아있는 이름 리턴
    for(const [key, value] of map){
        if(value >= 1) return key
    }
}