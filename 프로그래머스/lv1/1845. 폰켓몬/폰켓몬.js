function solution(nums) {
    let count = 0;
    const numSet = [ ...new Set(nums)];
    return (numSet.length < nums.length/2) ? numSet.length : nums.length/2;


}