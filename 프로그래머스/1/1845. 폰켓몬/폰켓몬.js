function solution(nums) {
    var answer = 0;
    const numsSet = [...new Set(nums)];
    const select = nums.length/2;
    return numsSet.length>=select ? select : numsSet.length;
}