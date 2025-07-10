function insertHeap(heap, value){
    heap.push(value);
    let index = heap.length-1;
    while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
        if (heap[parent] <= heap[index]) break;    
        [heap[parent], heap[index]] = [heap[index], heap[parent]];
        index = parent; 
    };
};

function popMin(heap){
    if(heap.length === 0) return undefined;
    const min = heap[0];
    const last = heap.pop();
    if(heap.length === 0) return min;
    heap[0] = last;
    let index = 0;
    
    while(true){
        let left = index * 2 + 1;
        let right = index * 2 + 2;
        let smallest = index;

        if(left < heap.length && heap[left] < heap[smallest]) smallest = left;
        if(right < heap.length && heap[right] < heap[smallest]) smallest = right;

        if(smallest === index) break;

        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;
    }
    return min;
}

function solution(scoville, K) {
    var answer = 0;
    let heap = [];
    for(let s of scoville){
        insertHeap(heap, s);
    };
    
    while(heap.length >= 2 && heap[0] < K){
        const first = popMin(heap);
        const second = popMin(heap);
        if(second === undefined) return -1;
        const newScoville = first + (second * 2);
        insertHeap(heap, newScoville);
        answer ++;
    };
    return heap[0] >= K ? answer : -1;
}

