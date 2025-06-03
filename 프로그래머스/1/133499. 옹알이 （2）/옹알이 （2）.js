function solution(babbling) {
    var answer = 0;
    const canSay = ["aya", "ye", "woo", "ma"];
    for(let word of babbling){
        let current = word;
        let prev = '';
        let isValid = true; //중복되지 않은 유효한 단어인지
        
        while(current.length>0){
            let matched = false; //매치되는 단어가 있는지
            for(let s of canSay){
                if(current.startsWith(s)){
                    //이전과 같은 단어를 사용하는 경우
                    if (s === prev) {
                        isValid = false;
                        break;
                    } 
                    //이전과 다른 단어를 사용하는 경우
                    prev = s;
                    current = current.slice(s.length);
                    matched = true;
                    break;   
                }
            }
            if(!isValid || !matched) break;
        }
        if (isValid && current.length === 0) answer++;
    }
    return answer;
}