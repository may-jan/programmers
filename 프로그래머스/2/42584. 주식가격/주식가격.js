function solution(prices) {
    const time = Array(prices.length).fill(0);
    const stack = [];
    for(let i=0; i<prices.length; i++){
        while(stack.length&&prices[i] < prices[stack.at(-1)]){
            const topIndex = stack.pop();
            time[topIndex] = i - topIndex;
        }
        stack.push(i);
    }
    while(stack.length){
        const topIndex = stack.pop();
        time[topIndex] = prices.length - 1 - topIndex;
    }
    return time;
}