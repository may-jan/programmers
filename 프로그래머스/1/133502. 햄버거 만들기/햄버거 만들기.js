function solution(ingredient) {
    var answer = 0;
    let stack = [];
    for(let i of ingredient){
        stack.push(i);
        if(stack.length >=4){
            const len = stack.length;
            if(stack[len-4] == 1 && stack[len-3] == 2 && stack[len-2] == 3 && stack[len-1] == 1){
                answer++;
                for (let j = 0; j < 4; j++) stack.pop();
            }
        }
    }
    return answer;
}