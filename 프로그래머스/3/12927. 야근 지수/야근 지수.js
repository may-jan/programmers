function solution(n, works) {
    if(works.reduce((acc, cur) => acc + cur, 0) <= n) return 0;
    works.sort((a, b) => b - a);
    while(n > 0){
        works[0] --;
        n --;
        let i = 0;
        while(i < works.length-1 && works[i] < works[i+1]){
            [works[i], works[i+1]] = [works[i+1], works[i]];
            i++
        }
    }
    return works.reduce((acc, cur) => acc + cur ** 2, 0);
}