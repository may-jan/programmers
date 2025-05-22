function solution(numbers, direction) {
   const firstNum = numbers[0];
    const lastNum = numbers[numbers.length-1];
    return direction == "left" ? [...numbers.slice(1), firstNum] : [lastNum, ...numbers.slice(0,-1)]
}