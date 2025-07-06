function solution(priorities, location) {
    const queue = priorities.map((p,idx)=>({
         priority : p,
         isTarget : idx === location
    }));
    let count = 0;
    while(queue.length){
        const current = queue.shift();
        const hasHigher = queue.some(item => item.priority > current.priority);
        if(hasHigher){
            queue.push(current);
        }else{
            count ++;
            if(current.isTarget) return count;
        }
    }    
}