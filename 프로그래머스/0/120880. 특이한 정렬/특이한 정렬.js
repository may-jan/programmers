function solution(numlist, n) {
    numlist.sort((a,b) => {
        if(a+b - (2*n) == 0){
            return b-a;
        }
        return Math.abs(n-a)-Math.abs(n-b);
    });
    return numlist;
}