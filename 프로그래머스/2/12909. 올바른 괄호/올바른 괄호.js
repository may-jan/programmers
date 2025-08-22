function solution(s){
    let cum = 0
    for(let paren of s){
        paren === '(' ? cum += 1 : cum -= 1;
        if(cum < 0) {
            return false
        }
    }
    return cum === 0 ? true : false; 
}