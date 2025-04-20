function solution(a, b) {
    var answer = 0;
    let res1 = String(a)+String(b);
    let res2 = 2 * a * b;
    if(res1 == res2){
        answer = a + b;
    }else if(res1 > res2){
        answer = res1;
    }else{
        answer = res2;
    }
    return Number(answer);
}