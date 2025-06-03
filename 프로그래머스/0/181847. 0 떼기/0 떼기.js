function solution(n_str) {
    var str = n_str;
    for(let i=0; i<n_str.length; i++){
        if(n_str[i] != '0'){
            return str;
        }else{
            str = n_str.slice(i+1);
        }
    }
    return str;
}