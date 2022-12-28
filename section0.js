/** 0.1 변수란? */
// 프로그래밍 is 데이터 조작
// 데이터를 담아 두는 상자와 같은 개념 ; 변수

let box = 123 * 123;
console.log(box);

let word = "abc";
let num = 123;

console.log(word, num); // return abc, 123

/** 0.2 변수 선언과 데이터 할당 */
//할당 연산자 ' = '
//! 같다가 아니다.

/** 0.3 변수 선언 키워드 */

let ; //재할당은 가능, 재선언은 불가능

let box; //불가능

const ; // 선언과 할당인 반드시 동시에 이루어져야 한다. (빨간줄 이유)
const uniqueWord = 'abc';
uniqueWord = 'def';
console.log(uniqueWord)

//  변수 명은 동사가 아닌 명사로 !

/** 0.4 String, Number */
console.log('2'*2) //4
//string과 number 연산시,
//string을 먼저 number로 변환시켜보려는 시도를 한다.