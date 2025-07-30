function solution(want, number, discount){
    let answer = 0;
    for(let i=0; i<=discount.length-10; i++){
        const discountSlice = discount.slice(i, i + 10);
        const tempMap = new Map();
        
        for(const item of discountSlice){
            tempMap.set(item, (tempMap.get(item) || 0) + 1);
        }
        
        let isMatch = true;

        for(let j=0; j<want.length; j++){
            if(tempMap.get(want[j]) !== number[j]){
                isMatch = false;
                break;
            }
        }
        if(isMatch) answer++;
    }
    return answer;
}
