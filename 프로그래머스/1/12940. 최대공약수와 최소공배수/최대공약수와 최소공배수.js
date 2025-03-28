function solution(n, m) {
    var answer = [];
    const maxNum = Math.max(n, m)
    let num1 = [];
    let nNum = [];
    let mNum = [];
    
    for(let i = 1; i <= maxNum; i++){
        if(n % i == 0 &&  m % i == 0) num1.push(i);
        nNum.push(n*i)
        mNum.push(m*i)
    };
    // 최대공약수
    answer.push(Math.max(...num1));
    // 최소공배수
    nNum.filter((num)=>{
        if(mNum.includes(num)){
            answer.length == 1 ? answer.push(num) : "";
        }
    })
    return answer;
}