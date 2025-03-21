function solution(s){
    var left = 0
    var right = 0;
    if(s[0]===")") return false;
    for(let i=0; i<s.length; i++){
        s[i] === "(" ? left+=1 : right+=1;
        if(left < right) return false
    }
    return left !== right ? false : true 
}