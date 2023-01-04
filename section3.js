//3.4 비교 연산자
console.log("1 === 1", 1 === 1);
console.log(1 > 2); //false

const check = "check";
console.log("check === 'check'", check === "check");
console.log("check === 123", check === 123);

const arr = [1, 2, 3];
console.log("arr === [1,2,3]", arr === [1, 2, 3]); //???

//3.5 배열과 객체의 비교 (Notion)

//3.6 조건문과 논리 연산자 (if문)
const obj = {
  name: "Peter",
  age: 25,
};
if (obj.name === "Jason" || "Peter") {
  console.log("Hi, " + obj.name);
} else {
  console.log("not member");
}

/**
 * && AND 연산자
 * || OR 연산자
 */
