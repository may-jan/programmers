function solution(arr) {
  const len = arr.length;
  let target = 1;
  
  // 2의 거듭제곱 target이 len 이상이 될 때까지 곱함
  while(target < len){
    target *= 2;
  }
  
  // target이 len과 같으면 그대로, 더 크면 부족한만큼 0 추가
  const zerosToAdd = target - len;
  if(zerosToAdd === 0){
    return arr.slice();  // 원본 보호하고 싶으면 복사
  }
  
  // 0을 zerosToAdd개 만든 배열
  const padding = Array(zerosToAdd).fill(0);
  
  return arr.concat(padding);
}
