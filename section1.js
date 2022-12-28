// 1.1 배열 Array
// 순서가 존재하는 창고

["Jason", "Alice", "chris", "Jane", "Tom"];
let ranking = ["Jason", "Alice", "chria", "Jane", "Tom"];

console.log(lanking[0]); // Jason

const result = ranking.push("Juliet"); //push method는 값을 푸시하고 배열의 갯수를 return 한다.
console.log(result);

ranking.pop(); //pop method는 값을 처리하고 배열의 갯수를 return 한다. (마지막 배열 삭제)

Array.includes(); // 특정 배열에 주어진 데이터가 존재하는지 여부 확인 (boolean을 리턴)
ranking.includes("sonny"); //false

// 1.3 Dot notaion

let userData = {
  userName: "Jason",
  age: 12,
  gender: "Male",
};

// Braket notation
userData["userName"]; //string으로 입력해준다.

//1.4 객체 매소드

Object.keys(userData); // 키 값만 불러옴

const userDataKeys = Object.keys(userData);
userDataKeys.includes("email"); // 객체의 key들을 담은 배열에 email이 존재하는지 체크

const userDataValues = Object.values(userData);
