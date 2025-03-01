function solution(q, r, code) {
    var answer = '';
    Array.from(code).map((str, idx)=>{
        if(idx % q === r){
            answer += code[idx]
        }
    })
    return answer;
}