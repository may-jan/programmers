function solution(strings, n) {
    var answer = [];
    const sortedArr = strings.sort();
    return sortedArr.sort((a,b)=> a[n].charCodeAt() - b[n].charCodeAt());
}