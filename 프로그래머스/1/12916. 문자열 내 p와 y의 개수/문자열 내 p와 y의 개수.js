function solution(s){
    var answer = 0;
    for(let i=0; i<s.length; i++){
        if((s[i]).toLowerCase()==="p"){answer+=1}
        if((s[i]).toLowerCase()==="y"){answer-=1}
    }
    return  answer === 0 ? true : false
}