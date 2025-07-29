function solution(topping) {
    const rightCount = new Array(10000+1).fill(0);
    let rightKinds = 0;
    const leftSet = new Set();
    let result = 0;
    
    for(const t of topping){
        if(rightCount[t] === 0) rightKinds++;
        rightCount[t]++;
    }
    
    for(const t of topping){
        leftSet.add(t);
        rightCount[t]--;
        if(rightCount[t] == 0) rightKinds--;
        if(leftSet.size == rightKinds) result++;
    }
    
    return result;
}