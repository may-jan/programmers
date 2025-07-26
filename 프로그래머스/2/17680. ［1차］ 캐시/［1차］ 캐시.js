function solution(cacheSize, cities) {
    var answer = 0;
    const cache = [];
    cities.forEach((c) => {
        let city = c.toLowerCase();
        if(cache.includes(city)){  // cache hit
            cache.splice(cache.indexOf(city), 1); // 기존 city 제거
            cache.push(city); // 맨 뒤에 추가
            answer += 1;
        }else{
            // cache miss
            if(cacheSize > 0 && cache.length >= cacheSize){ // 캐시가 꽉찬경우
                cache.shift();
            }
            if(cacheSize > 0){
                cache.push(city); 
            }
            answer += 5;
        }
    })
    return answer;
}