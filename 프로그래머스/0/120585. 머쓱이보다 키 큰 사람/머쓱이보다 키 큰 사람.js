function solution(array, height) {
    const result = array.sort((a,b) => a-b).filter((tall)=> tall > height);
    return result.length;
}