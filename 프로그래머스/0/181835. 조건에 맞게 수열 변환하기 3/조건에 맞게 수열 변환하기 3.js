function solution(arr, k) {
    var answer = [];
    k % 2 == 1 ? arr.forEach((num)=>answer.push(num*k)) : arr.forEach((num)=>answer.push(num+k));
    return answer;
}