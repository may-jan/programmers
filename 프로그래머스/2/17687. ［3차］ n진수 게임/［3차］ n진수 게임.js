// ---------- 코드 개선 ----------
function solution(n, t, m, p) {
    let converted = '';
    let num = 0;
    while(converted.length < t*m){
        converted += num.toString(n); // 진법 변환 후 converted에 붙이기
        num ++;
    }
    
    // 튜브의 숫자 뽑아내기
    let result = '';
    for(let i=p-1; i<converted.length; i+=m){
        result += converted[i].toUpperCase();
    }
    
    return result.slice(0,t);
}