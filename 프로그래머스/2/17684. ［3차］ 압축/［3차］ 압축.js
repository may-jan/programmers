function solution(msg) {
    var answer = [];
    const map = new Map();
    
    for(let i=0; i<=26; i++){
        map.set(String.fromCharCode(64+i), i);
    }
    
    let lastIndex = 27;
    let i = 0;
    
    while(i<msg.length){
        let w = msg[i];
        let j = i + 1;

        // 사전에 있는 가장 긴 문자열 찾기
        while(j<=msg.length && map.has(msg.slice(i, j))){
            w = msg.slice(i, j);
            j++;
        }
        
        // 가장 긴 문자열의 출력번호 push
        answer.push(map.get(w));
        
        // 다음글자를 더하여 사전에 추가
        if(j<=msg.length){
            map.set(msg.slice(i, j), lastIndex);
            lastIndex += 1;
        }
        
        i += w.length; // 인덱스 건너뛰기
    }
    return answer;
}