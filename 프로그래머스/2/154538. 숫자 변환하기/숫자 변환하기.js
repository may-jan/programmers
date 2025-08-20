function solution(x, y, n) {
    function calc(curNum, i){
        switch(i){
            case 0 :
                return curNum - n;
            case 1 :
                if(curNum%2 === 0){
                    return curNum/2;
                }
                else{
                    return 0;
                }
            case 2 :
                if(curNum%3 === 0){
                    return curNum/3;
                }else{
                    return 0;
                }
        }  
    }
    
    function bfs(){
        const queue = [[y, 0]];
        const visited = new Set();
        visited.add(y);

        while(queue.length > 0){
            const [curNum, count] = queue.shift();
            if(curNum === x) return count;
            for(let i=0; i<3; ++i){
                let nextNum = calc(curNum,i);
                if(nextNum >= x && !visited.has(nextNum)){
                    visited.add(nextNum);
                    queue.push([nextNum ,count+1]);
                }
            }
        }
        return -1;
    }
    return bfs()
}