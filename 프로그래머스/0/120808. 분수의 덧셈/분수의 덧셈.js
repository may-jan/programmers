function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    answer[0] = (numer1 * denom2) + (numer2 * denom1);
    answer[1] = denom1 * denom2;
    const smallNum = Math.min(...answer);
    let greatest = 1;
    for(let i=smallNum; i>=1; i--){
        if(answer[0] % i == 0 && answer[1] % i == 0){
            greatest = i;
            break;
        }
    }
    return [answer[0] / greatest, answer[1] / greatest];
}