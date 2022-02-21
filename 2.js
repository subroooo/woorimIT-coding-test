function second(arr) {
  const result = [];
  const Max = Math.max(...arr);
  const Min = Math.min(...arr);
  //배열 그대로 받아왔으므로 전개연산자를 사용해서 Math함수를 사용해야함
  const sum = arr.reduce((stack, e1) => {
    return stack + e1;
  });
  result.push(Min);
  result.push(sum);
  result.push(Max);
  return result;
}
//[최소,합계,최대]
console.log(second([3]));
