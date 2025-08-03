function solution(numbers) {
    var answer = Array(numbers.length).fill(-1);
    const idxStack = [];
    for(let i=numbers.length-1; i>=0; i--){
        while(idxStack.length && numbers[i] >= numbers[idxStack[idxStack.length-1]]){
            idxStack.pop();
        }
        if(idxStack.length){
            answer[i] = numbers[idxStack[idxStack.length-1]];
        }
        idxStack.push(i)
    }
    return answer;
}