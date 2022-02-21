function first(input) {
  const splitInput = input.split(" ");
  const result = [];
  let num = splitInput[0];

  for (let i = 0; i < num; i++) {
    result.push(splitInput[1]);
  }
  return result.join("");
}
console.log(first("3 하이"));

//n > 반복했으면 하는 숫자
//string > 반복했으면 하는 문자열
//띄어쓰기로 구분
