function solution(myString, pat) {
    var answer = 0;
    const idx = myString.indexOf(pat);
    for(let i=idx; i<myString.length; i++){
        const str = myString.slice(i, i+pat.length);
        if(str.includes(pat)) answer++;
    }
    return answer;
}