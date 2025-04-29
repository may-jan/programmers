function solution(num_list) {
    const res1 = num_list.reduce((acc, cur)=> acc + cur);
    const res2 = num_list.reduce((acc, cur)=> acc * cur);
    return num_list.length >= 11 ? res1 : res2;
}