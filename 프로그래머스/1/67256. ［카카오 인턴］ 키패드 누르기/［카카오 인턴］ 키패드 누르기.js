function solution(numbers, hand) {
  let answer = '';
  let left = 10;   // 현재 왼손 위치 (*)
  let right = 12;  // 현재 오른손 위치 (#)

  const keypad = {
    1:[0,0], 2:[0,1], 3:[0,2],
    4:[1,0], 5:[1,1], 6:[1,2],
    7:[2,0], 8:[2,1], 9:[2,2],
    10:[3,0], 11:[3,1], 12:[3,2]
  };

  function getDistance(from, to){
    const [fx, fy] = keypad[from];
    const [tx, ty] = keypad[to];
    return Math.abs(fx-tx) + Math.abs(fy-ty);
  }

  numbers.forEach(num => {
    if(num == 0) num = 11; //0은 11로 치환
    if([1,4,7].includes(num)){
      answer += 'L';
      left = num;
    }else if([3,6,9].includes(num)){
      answer += 'R';
      right = num;
    }else{
      const distanceL = getDistance(left, num);
      const distanceR = getDistance(right, num);

      if(distanceL < distanceR){
        answer += 'L';
        left = num;
      }else if(distanceL > distanceR){
        answer += 'R';
        right = num;
      }else{
        if(hand === 'left'){
          answer += 'L';
          left = num;
        }else{
          answer += 'R';
          right = num;
        }
      }
    }
  });

  return answer;
}
