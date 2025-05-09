function solution(num_list) {
    const lastIdx = num_list.length-1;
    let num;
    console.log(num_list[lastIdx])
    if(num_list[lastIdx] > num_list[lastIdx-1]){
        num = num_list[lastIdx]-num_list[lastIdx-1];
    }else{
        num = num_list[lastIdx] * 2;
    }
    return [...num_list, num];
}