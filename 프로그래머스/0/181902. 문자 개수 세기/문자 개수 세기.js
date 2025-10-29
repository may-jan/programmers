function solution(my_string) {
    const res = new Array(52).fill(0);
    for(let i=0; i<my_string.length; i++){
        const code = my_string[i].charCodeAt();
        if(code <= 90){
            res[code-65] += 1;
        }else{
            res[code-71] += 1;
        }
    }
    return res;
}