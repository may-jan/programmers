function solution(k, score) {
    var answer = [];
    var top = [];
    score.map((num)=>{
        top.push(num);
        if(top.length > k){
            top.sort((a,b)=>a-b).reverse();
            top.pop();
        } 
        answer.push(Math.min(...top));
    })
    return answer;
}