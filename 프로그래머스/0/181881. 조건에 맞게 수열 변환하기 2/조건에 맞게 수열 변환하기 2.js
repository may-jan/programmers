function solution(arr) {
    var answer = 0;
    let temp = arr;
    let check = [];

    while(temp.every(item => !check.includes(item))){
        check = temp.map((num) => {
            if(num>=50 && num%2==0) return num/2
            if(num<50 && num%2==1) return num*2 + 1;
            return num;
        })
        if(temp.every(item => check.includes(item))){
            return answer;
        }
        answer++;
        temp = check;
        check = [];
    }   
    return answer;
}