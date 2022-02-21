function ten(input) {
  const nums = input.split(" ");
  const obj = {
    삼성: [],
    애플: [],
    한성: [],
    레노버: [],
    엘지: [],
    아수스: [],
    기타: [],
  };
  for (let i = 0; i < nums.length; i++) {
    if (Number(nums[i]) % 1000 === 1) {
      obj.삼성.push(nums[i]);
    } else if (Number(nums[i]) % 1000 === 2) {
      obj.애플.push(nums[i]);
    } else if (Number(nums[i]) % 1000 === 3) {
      obj.한성.push(nums[i]);
    } else if (Number(nums[i]) % 1000 === 4) {
      obj.레노버.push(nums[i]);
    } else if (Number(nums[i]) % 1000 === 5) {
      obj.엘지.push(nums[i]);
    } else if (Number(nums[i]) % 1000 === 6) {
      obj.아수스.push(nums[i]);
    } else {
      obj.기타.push(nums[i]);
    }
  }
  return obj;
}
console.log(ten("1532 5342 8329 2632 5849 3213 1002"));
