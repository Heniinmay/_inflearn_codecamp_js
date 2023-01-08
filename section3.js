const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("xc");

// container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>"; //

// textcontent 직접 텍스트를 입력해주는 태그

const dataFromMaker = () => {
  // id인지 Class인지 확실하게 적어줘야함
  // console.log(document.querySelector('#target-year-input').value);
  // console.log(document.querySelector('#target-month-input').value);
  // console.log(document.querySelector('#target-date-input').value);

  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  //  console.log(`${inputYear}-${inputMonth}-${inputDate}`)

  const dateFormat = inputYear + "-" + inputMonth + "-" + inputDate;
  return dateFormat;
};

const counterMaker = () => {
  // console.log(dataFromMaker()); //return으로 함수값이 잘 넘어 오는 것을 확인
  const targetDateInput = dataFromMaker(); //return 데이터가 여기에 담겼따

  const nowDate = new Date();
  // console.log(nowDate)
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0); //자정을 기준으로 날짜를 다시 구해온다
  // console.log(targetDate)

  // console.log(targetDate - nowDate);

  const remaining = (targetDate - nowDate) / 1000;

  // Math.floor 내림, 소숫점들을 없애줌
  // const remainingDate = Math.floor(remaining / 3600 / 24);
  // % 나머지
  // const remainingHours = Math.floor(remaining / 3600) % 24;
  // const remainingMin = Math.floor(remaining / 60) % 60;
  // const remainingSec = Math.floor(remaining) % 60;

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  // console.log(
  //   `D-Day까지 ${remainingDate}일, ${remainingHours}시간, ${remainingMin}분, ${remainingSec}초`
  // );

  // ! 조건에 따른 메세지 출력
  // ! 만약, remaining === 0 이라면, 타이머가 종료되었습니다 를 리턴
  // 수도코드를 작성했다. 로직 하나하나를 세분화해서 자세하게 작성하는 것이 중요하다.

  if (remaining === 0 || remaining < 0) {
    console.log("타이머가 종료되었습니다.");
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다. </h3> ";
  } else if (isNaN(remaining)) {
    //만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
    console.log("유효한 시간대가 아닙니다.");
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3> ";
  }

  /*
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");
*/

  const documentObj = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    min: document.getElementById("min"),
    sec: document.getElementById("sec"),
  };
  documentObj["days"].textContent = remainingObj["remainingDate"];
  documentObj["hours"].textContent = remainingObj["remainingHours"];
  documentObj["min"].textContent = remainingObj["remainingMin"];
  documentObj["sec"].textContent = remainingObj["remainingSec"];
};

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
