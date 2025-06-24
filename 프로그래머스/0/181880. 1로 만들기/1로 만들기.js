function solution(num_list) {
    var answer = 0;
    num_list.forEach((num)=>{
        let temp = num;
        while(temp != 1){
            temp = temp % 2 == 0 ? temp/2 : (temp-1)/2;
            answer ++;
        }
    })
    return answer;
}