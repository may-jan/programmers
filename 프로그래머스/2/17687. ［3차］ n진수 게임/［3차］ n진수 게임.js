function solution(n, t, m, p) {
    var answer = '';
    let numStr = '';
    for(let i=0; i<=t*m; i++){
        const change = i.toString(n); // 1. 진법 변환
        numStr += String(change) // 2. 스트링으로 변경 -> numStr에 붙이기
    }

    const reg = /[a-z]/;
    
    // 3. 튜브가 말해야하는 숫자 뽑아내기
    for(let i=p-1; i<numStr.length; i+=m){
        const checking = reg.test(numStr[i])
        if(checking){
            answer += numStr[i].toUpperCase();
        }else{
            answer += numStr[i];
        }        
    }
    
    return answer.slice(0,t)
}