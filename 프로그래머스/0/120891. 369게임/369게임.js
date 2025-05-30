function solution(order) {
    var answer = 0;
    const arr = `${order}`.split("");
    arr.forEach((num)=>{
        if(num!=0 && num%3==0) answer++;
    });
    return answer;
}