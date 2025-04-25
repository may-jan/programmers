function solution(num_list) {
    let num1 = 1;
    num_list.forEach((num)=>{
        num1 *= num;
    })
    let num2 = num_list.reduce((acc,cur) => acc + cur) ** 2;
    return num1 < num2 ? 1 : 0;
}