function solution(jobs){
    jobs.sort((a, b) => a[0] - b[0]); //요청시간 기준 정렬

    let time = 0; //현재시간
    let totalTime = 0; //총시간
    let i = 0; //인덱스 
    const count = jobs.length;
    const heap = []; //대기큐

    while(i < count || heap.length > 0){
        while(i < count && jobs[i][0] <= time){ //요청시간<=현재시간
            heap.push([jobs[i][1], jobs[i][0]]); //[소요시간,요청시간]
            heap.sort((a, b) => a[0] - b[0]); //소요시간 기준 대기큐 정렬(우선순위)
            i ++;
        }

        if(heap.length > 0){
            const [duration, start] = heap.shift();
            time += duration; //현재시간+=소요시간
            totalTime += time - start; //총시간 += 현재시간 - 요청시간
        }else{
            time = jobs[i][0]; //다음 작업 도착까지 시간 점프
        }
    }

    return Math.floor(totalTime / count);
}