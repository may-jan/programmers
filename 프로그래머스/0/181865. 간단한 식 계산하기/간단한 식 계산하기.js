function solution(binomial) {
    const arr = binomial.split(" ");
    const [a, b] = [Number(arr[0]), Number(arr[2])];
    if(arr[1] == "+") return a+b;
    if(arr[1] == "-") return a-b;
    if(arr[1] == "*") return a*b;
    return answer;
}