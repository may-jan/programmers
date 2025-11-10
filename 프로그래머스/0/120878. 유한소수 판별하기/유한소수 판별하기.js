function solution(a, b) {
    for(let i=a; i>0; i--){
        if(a%i == 0 && b%i == 0){
            a = a/i;
            b = b/i;
            break;
        }
    }
    
    while(b !== 1){
        if(b % 2 == 0){
            b = b/2;
        }else if(b % 5 == 0){
            b = b/5;
        }else{
            break;
        }
    }    
    
    return b == 1 ? 1 : 2
}