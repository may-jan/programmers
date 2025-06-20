function solution(clothes) {
    var answer = 1;
    const map = new Map();
    for(const [value, key] of clothes){
        map.set(key, [...(map.get(key) || []), value])
    }
    for (const items of map.values()) {
        answer *= items.length + 1;
    }
    return answer-1;
}