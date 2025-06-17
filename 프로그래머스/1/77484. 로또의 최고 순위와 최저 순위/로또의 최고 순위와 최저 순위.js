function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];    
    const match = lottos.filter((n)=>win_nums.includes(n)).length;
    const zero = lottos.filter((n)=>n==0).length;
    return [rank[match+zero], rank[match]];
}