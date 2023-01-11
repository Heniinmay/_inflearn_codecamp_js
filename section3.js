const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");

container.style.display = "none";
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

const intervalIdArr = [];

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

  // ! 조건에 따른 메세지 출력
  // ! 만약, remaining === 0 이라면, 타이머가 종료되었습니다 를 리턴
  // 수도코드를 작성했다. 로직 하나하나를 세분화해서 자세하게 작성하는 것이 중요하다.

  if (remaining <= 0) {
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다. </h3> ";
    messageContainer.style.display = "flex";
    setClearInterval();
  } else if (isNaN(remaining)) {
    //만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
    container.style.display = "none";
    console.log("유효한 시간대가 아닙니다.");
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3> ";
    messageContainer.style.display = "flex";
    setClearInterval();
    //return; //함수 종료 아래 코드 실행 안함
  }
  console.log("함수 종료 안됨");
  /*
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");
*/

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  const documentArr = ["days", "hours", "min", "sec"];
  const timeKeys = Object.keys(remainingObj); //remainingObj의 key들만 가져온다

  // documentObj["days"].textContent = remainingObj["remainingDate"];
  // documentObj["hours"].textContent = remainingObj["remainingHours"];
  // documentObj["min"].textContent = remainingObj["remainingMin"];
  // documentObj["sec"].textContent = remainingObj["remainingSec"];

  /**
  for (let i = 0; i < timeKeys.length; i = i + 1) {
    documentObj[docKyes[i]].textContent = remainingObj[timeKeys[i]];
     * i = 1,
     * documentObj[docKyes[1]] = documentObj[days] = document.getElementById("days") =>
     * <span id="days">nn</span> 을 가져옴
  }
  // 밑에 리팩토링
  */

  // const documentObj = {
  //   days: document.getElementById("days"),
  //   hours: document.getElementById("hours"),
  //   min: document.getElementById("min"),
  //   sec: document.getElementById("sec"),
  // };

  // 4.6 For-In 문 ; 객체에 주로 사용
  let i = 0;
  for (let tag of documentArr) {
    document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
    i++; // 1씩 증가시킨다 i = i + 1, 프로퍼티의 갯수만큼 조건식 진행
  }
};

const starter = () => {
  container.style.display = "flex";
  messageContainer.style.display = "none";
  counterMaker(); //처음에 한번 실행, 1초 뒤에 실행되는 것은 아래 setInterval
  const intervalId = setInterval(counterMaker, 1000);

  // for (let i = 0; i < 100; i++) {
  //   setTimeout(() => {
  //     counterMaker();
  //   }, 1000);

  intervalIdArr.push(intervalId);
};

const setClearInterval = function () {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-day를 입력해 주세요.</h3>";
  messageContainer.style.display = "flex";
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};
