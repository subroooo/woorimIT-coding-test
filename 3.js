function third(applier) {
  const result = [];
  applier.forEach((element) => {
    if (
      element.gender === "남자" &&
      (element.age >= 18 || element.age < 60) &&
      element.weight >= 70 &&
      element.height >= 170
    ) {
      result.push(element.name);
    }
  });
  return result;
}
const applier = [
  {
    name: "조상우",
    gender: "남자",
    age: 47,
    height: 181,
    weight: 85,
  },
  {
    name: "오일남",
    gender: "남자",
    age: 77,
    height: 175,
    weight: 65,
  },
  {
    name: "한미녀",
    gender: "여자",
    age: 45,
    height: 167,
    weight: 49,
  },
  {
    name: "압둘 알리",
    gender: "남자",
    age: 33,
    height: 172,
    weight: 78,
  },
  {
    name: "장덕수",
    gender: "남자",
    age: 44,
    height: 180,
    weight: 73,
  },
  {
    name: "강새벽",
    gender: "여자",
    age: 27,
    height: 176,
    weight: 54,
  },
];
console.log(third(applier));
