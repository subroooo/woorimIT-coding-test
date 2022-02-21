// 문자열 > 객체
function eight(input) {
  const arr = input.split(`\n`);
  const obj1 = arr[1].split(" ");
  const obj2 = arr[2].split(" ");
  let map = new Map();
  map.set(obj1[0], obj1[1]);
  map.set(obj2[0], obj2[1]);
  let obj = Object.fromEntries(map.entries());
  return obj;
}
console.log(
  eight(`2
woorim 남자
soongu 남자`)
);
