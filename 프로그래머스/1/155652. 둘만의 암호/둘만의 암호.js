function solution(s, skip, index) {
    var answer = '';
    let arr = [];
    for(let i=97; i<=122; i++){
        if(!skip.includes(String.fromCharCode(i))) arr.push(String.fromCharCode(i))
    }
    for(let i=0; i<s.length; i++){
        let cur_idx = arr.indexOf(s[i]);
        let new_idx = (cur_idx + index) % arr.length;
        answer += arr[new_idx];
    }
    return answer;
}