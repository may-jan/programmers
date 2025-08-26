function solution(n) {
    let pizza = 1;
    while(true){
        if((6 * pizza) % n == 0){
            return pizza;
        }else{
            pizza++;
        }         
    }
}