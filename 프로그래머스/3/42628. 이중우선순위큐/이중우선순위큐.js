// 코드 정리

function insert(heap, value, compare){
    heap.push(value);
    let index = heap.length-1;
    while(index > 0){
        const parent = Math.floor((index - 1) / 2);
        if(compare(heap[parent], heap[index])) break;
        [heap[parent], heap[index]] = [heap[index], heap[parent]];
        index = parent;
    }
}

function remove(heap, compare){
    if(heap.length === 0) return null;
    if(heap.length === 1) return heap.pop();
    const top = heap[0];
    heap[0] = heap.pop();
    let index = 0;
    const length = heap.length;
    while(true){
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let target = index;
        if(left < length && compare(heap[left], heap[target])) target = left;
        if(right < length && compare(heap[right], heap[target])) target = right;
        if(target === index) break;
        [heap[index], heap[target]] = [heap[target], heap[index]];
        index = target;
    }
    return top;
}

function removeValid(heap, counter, compare){
  while(heap.length){
    const value = remove(heap, compare);
    if(counter.get(value)){
      counter.set(value, counter.get(value) - 1);
      return value;
    }
  }
  return null;
}

function cleanRoot(heap, counter, compare){
  while(heap.length && !counter.get(heap[0])){
    remove(heap, compare);
  }
}

function solution(operations){
    const minHeap = [];
    const maxHeap = [];
    const counter = new Map();
    
    operations.forEach((o) => { 
        const [condition, value] = o.split(" ");
        const num = Number(value);
        
        if(condition === "I"){
            insert(minHeap, num, (a, b) => a <= b); // 최소 힙
            insert(maxHeap, num, (a, b) => a >= b); // 최대 힙
            counter.set(num, (counter.get(num) || 0) + 1);
        }
        if(condition === "D" && value === "1"){
            removeValid(maxHeap, counter, (a, b) => a > b); // 최대값 삭제
        }
        if(condition === "D" && value === "-1"){
            removeValid(minHeap, counter, (a, b) => a < b); // 최소값 삭제
        }

        // 유령 루트 정리
        cleanRoot(minHeap, counter, (a, b) => a < b);
        cleanRoot(maxHeap, counter, (a, b) => a > b);
    })

    if(minHeap.length === 0) return [0, 0];
    return [maxHeap[0], minHeap[0]];
}
