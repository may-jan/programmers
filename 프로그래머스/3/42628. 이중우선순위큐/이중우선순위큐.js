function InsertMinHeap(heap, value){
    heap.push(value);
    let index = heap.length-1;
    while(index > 0){
        const parent = Math.floor((index-1)/2);
        if(heap[parent] <= heap[index]) break;
        [heap[parent], heap[index]] = [heap[index], heap[parent]];
        index = parent;
    }
}
function InsertMaxHeap(heap, value){
    heap.push(value);
    let index = heap.length-1;
    while(index > 0){
        const parent = Math.floor((index-1)/2);
        if(heap[parent] >= heap[index]) break;
        [heap[parent], heap[index]] = [heap[index], heap[parent]];
        index = parent;
    }
}

function RemoveMinHeap(heap){
    if(heap.length == 0) return null;
    if(heap.length == 1) return heap.pop();
    const min = heap[0];
    heap[0] = heap.pop();
    let index = 0;
    while(true){
        const left = (2*index) + 1;
        const right = (2*index) + 2;
        let smallest = index;
        if(left < heap.length && heap[left] < heap[smallest]){
            smallest = left;
        }
        if(right < heap.length && heap[right] < heap[smallest]){
            smallest = right;
        }
        if(index == smallest) break;
        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;        
    }
    return min;
}

function RemoveMaxHeap(heap){
    if (heap.length === 0) return null;
    if (heap.length === 1) return heap.pop();
    const max = heap[0];
    heap[0] = heap.pop();
    let index = 0;
    const length = heap.length;
    while(true) {
        const left = (2*index) + 1;
        const right = (2*index) + 2;
        let largest = index;
        if (left < length && heap[left] > heap[largest]) {
            largest = left;
        }
        if (right < length && heap[right] > heap[largest]) {
            largest = right;
        }
        if (largest === index) break;
        [heap[index], heap[largest]] = [heap[largest], heap[index]];
        index = largest;
    }
  return max;
}

function insert(minHeap, maxHeap, counter, value){
    InsertMinHeap(minHeap, value);
    InsertMaxHeap(maxHeap, value);
    counter.set(value, (counter.get(value) || 0) + 1);
}

function removeMinValid(minHeap, counter){
    while (minHeap.length){
        const val = RemoveMinHeap(minHeap);
        if (counter.get(val)){
            counter.set(val, counter.get(val) - 1);
            return val;
        }
  }
  return null;
}

function removeMaxValid(maxHeap, counter) {
  while (maxHeap.length) {
    const val = RemoveMaxHeap(maxHeap);
    if (counter.get(val)) {
      counter.set(val, counter.get(val) - 1);
      return val;
    }
  }
  return null;
}

function solution(operations) {
    var answer = [];
    let minHeap = [];
    let maxHeap = [];
    let counter = new Map();
    operations.forEach((o)=>{
        const [condition, value] =  o.split(" ");
        if(condition == 'I'){
            insert(minHeap, maxHeap, counter, Number(value));
        };
        if(condition == 'D' && value == 1){
            removeMaxValid(maxHeap, counter);
        };
        if(condition == 'D' && value == -1){
            removeMinValid(minHeap, counter);            
        };
        
        // 최종 유효한 최댓값 찾기
        while(maxHeap.length && !counter.get(maxHeap[0])){
            RemoveMaxHeap(maxHeap);
        }
        // 최종 유효한 최솟값 찾기
        while(minHeap.length && !counter.get(minHeap[0])){
            RemoveMinHeap(minHeap);
        }

        if(minHeap.length === 0){
            answer = [0, 0];
        }else{
            answer = [maxHeap[0], minHeap[0]];
        }
    });
    return answer;
}
