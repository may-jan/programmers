function solution(array) {
    const middleIdx = Math.floor(array.length / 2);
    array.sort((a,b) => a-b);
    return array[middleIdx]
}