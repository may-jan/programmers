function solution(num_list) {
    var odd = 0;
    var even = 0;
    num_list.forEach((num,idx)=>{
        (idx+1) % 2 == 0 ? even+=num : odd+=num;
    })
    return Math.max(odd, even)
}