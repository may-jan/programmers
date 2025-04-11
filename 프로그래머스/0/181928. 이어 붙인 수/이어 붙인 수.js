function solution(num_list) {
    var even = "";
    var odd = "";
    num_list.forEach((num)=>{
        return num % 2 == 0 ? even += String(num) : odd += String(num); 
    })
    return Number(even) + Number(odd);
}