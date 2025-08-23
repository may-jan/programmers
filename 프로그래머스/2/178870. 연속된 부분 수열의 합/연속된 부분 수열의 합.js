function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    let answer = [0, sequence.length - 1]; // 가장 긴 구간으로 초기화

    while(left <= right && right < sequence.length){
        if(sum === k){
            if((right - left) < (answer[1] - answer[0])){
                answer = [left, right];
            }
            sum -= sequence[left];
            left++;
        }else if(sum < k){
            right++;  // 합이 부족 -> 오른쪽 확장
            if(right < sequence.length) sum += sequence[right];
        }else{
            sum -= sequence[left];  // 합이 초과 -> 왼쪽 줄이기
            left++;
        }
    }

    return answer;
}
