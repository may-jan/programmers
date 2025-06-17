function solution(lottos, win_nums) {
    var answer = [];
    let cnt = 0; 
    let zero = 0;
    for(let i=0; i<win_nums.length; i++){
        if(lottos.includes(win_nums[i])) cnt+=1;
        if(lottos[i] == 0) zero+=1;
    }
    for(let i=0; i<2; i++){
        let match = i == 0 ? cnt + zero : cnt;
        switch(match){
            case 6:
                answer.push(1)
                break;
            case 5 :
                answer.push(2)
                break;
            case 4 :
                answer.push(3)
                break;
            case 3 :
                answer.push(4)
                break;
            case 2 :
                answer.push(5)
                break;
            default :
                answer.push(6)
                break;
        }
    }
    return answer;
}