function solution(s) {
    var answer = 0;
    var i = 0;
    while(i < s.length){
        let x = s[i];
        let same = 0;
        let diff = 0;
        same +=1;
        for(let j=i+1; j<s.length; j++){  // j = x의 다음 인덱스
            x == s[j] ? same += 1 : diff += 1;
            if(same == diff){
                answer += 1;
                i = j+1;
                break;
            }
        }
        if(same !== diff) {
            answer++;
            break;
        }
    }
    return answer;
}