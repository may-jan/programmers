function solution(dartResult) {    
    const reg = /\d{1,2}[SDT][*#]?/g;
    const splited = dartResult.match(reg);
    
    const numReg = /\d{1,2}/;
    const alReg = /[SDT]/;
    const optionReg = /[*#]/;
    const arr = [];
    
    splited.forEach((s, i) => {
        const num = Number(s.match(numReg)[0]);
        const al = s.match(alReg)[0];
        const option = s.match(optionReg) ? s.match(optionReg)[0] : null;

        // 숫자와 알파벳으로 현재값 구하기
        let score = 0;
        if(al == "S") score = num;
        if(al == "D") score = num ** 2;
        if(al == "T") score = num ** 3;
        arr.push(score);
        
        // 옵션이 있으면 
        if(option == "*"){
            if (i > 0) arr[i-1] = arr[i-1] * 2;
            arr[i] = score * 2;
        }
        if(option == "#") arr[i] = 0-score;
    })
    
    return arr.reduce((acc, cur) => acc+cur);
}