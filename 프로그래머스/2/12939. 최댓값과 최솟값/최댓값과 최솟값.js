function solution(s) {
    const arr = s.split(" ");
    const maxNum = Math.max(...arr);
    const minNum = Math.min(...arr);
    return `${minNum} ${maxNum}`
}