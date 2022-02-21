function fourth(N, M) {
  const arrN = N.split("");
  const arrM = M.split("");
  let sum = 0;

  for (let i = 0; i < arrM.length; i++) {
    if (arrN.includes(arrM[i])) {
      sum += i;
    }
  }
  return sum;
}
console.log(fourth("good", "daood"));

//   arrN.forEach((element) => {
//     for (let i = 0; i < arrM.length; i++) {
//       if (arrM[i] === element) {
//         sum += arrM.at(element);

//       }
//     }
//   });
