function solution(ingredient) {
    var answer = 0;
    let stack = [];
    for(let i of ingredient){
        stack.push(i);
        if(stack.length >=4){
            const len = stack.length;
            if(stack.slice(len-4).join("") == 1231){
                answer++;
                for (let j = 0; j < 4; j++) stack.pop();
            }
        }
    }
    return answer;
}