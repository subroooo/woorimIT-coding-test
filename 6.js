//문자열이 주어짐
//소수 첫째 자리에서 반올림한 정수출력
function six(input) {
  const arr = input.split(", ");

  const sum = arr.reduce((stack, e1) => {
    return Number(stack) + Number(e1);
  });
  return Math.floor(sum);
}
console.log(six("0, 30, 0, 0, 70, 100, 80, 100, 99, 88, 70, 1"));
