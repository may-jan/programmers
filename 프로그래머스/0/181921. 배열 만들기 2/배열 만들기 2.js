function solution(l, r) {
    var answer = [];
    for(let i=l; i<=r; i++){
        const numStr = String(i);
        let isOnlyFiveOrZero = true;
        for(let j=0; j <numStr.length; j++){
            if(numStr[j]!=='0' && numStr[j]!=='5'){
                isOnlyFiveOrZero = false;
                break;
            }
        }
        if(isOnlyFiveOrZero){
            answer.push(i);
        }
    }
   
    return answer.length ? answer : [-1];
}