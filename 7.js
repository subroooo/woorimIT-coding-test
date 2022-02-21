function seven(input) {
  const arr = input.split(":");
  const hour = arr[0] + "시";
  const min = arr[1] + "분";
  const second = arr[2] + "초";
  const result = [];
  result.push(hour);
  result.push(min);
  result.push(second);

  return result;
}
console.log(seven("13:05:31"));
