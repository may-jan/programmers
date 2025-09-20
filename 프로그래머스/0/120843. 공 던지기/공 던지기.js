function solution(numbers, k) {
    const n = numbers.length;
    let curIdx = 0; // 현재 공을 던진 사람 인덱스
    let count = 1; // 던진 횟수

    while(count < k){
        curIdx = (curIdx + 2) % n;
        count++;
    }

    return numbers[curIdx];
}