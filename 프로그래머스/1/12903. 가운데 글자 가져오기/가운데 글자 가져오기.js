function solution(s) {
    const num = Math.ceil(s.length/2);
    return (s.length % 2 == 1) ? s[num-1] : s.slice(num-1, num+1);
}