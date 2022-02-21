function fifth(input) {
  const arr = input.split(`\n`);
  const pattern = arr[0];
  const s = arr[1];
  const splitS = s.split(" ");

  return splitS;
}
console.log(
  fifth(`aaba
foo bar bar foo`)
);
