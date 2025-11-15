function solution(n) {
    const arr = Array.from({length: n}, () => Array(n).fill(0));
    let num = 1;
    
    // 좌표
    let top = 0, bottom = n-1, left = 0, right = n-1;
    
    while(top <= bottom && left <= right){
        // 오른쪽으로
        for(let i=left; i<=right; i++) arr[top][i] = num++;            
        top++;
        
        // 아래로
        for(let i=top; i<=bottom; i++) arr[i][right] = num++;
        right--;
        
        //  왼쪽으로
        if(top <= bottom){
            for(let i=right; i>=left; i--) arr[bottom][i] = num++;
            bottom--;
        }
        
        // 위로
        if(left <= right){
            for(let i=bottom; i>=top; i--) arr[i][left] = num++;
            left++;
        }
    }
    return arr;
}