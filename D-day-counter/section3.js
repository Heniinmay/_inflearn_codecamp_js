const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");
const savedDate = localStorage.getItem("saved-date");
const intervalIdArr = [];

container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>"; //

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

const counterMaker = (data) => {
  if (data !== savedDate) {
    localStorage.setItem("saved-date", data);
  }
  const nowDate = new Date();
  const targetDate = new Date(data).setHours(0, 0, 0, 0); //자정을 기준으로 날짜를 다시 구해온다
  const remaining = (targetDate - nowDate) / 1000;

  // ! 조건에 따른 메세지 출력
  // ! 만약, remaining === 0 이라면, 타이머가 종료되었습니다 를 리턴
  // 수도코드를 작성했다. 로직 하나하나를 세분화해서 자세하게 작성하는 것이 중요하다.

  if (remaining <= 0) {
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다. </h3> ";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    //만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3> ";
    messageContainer.style.display = "flex";
    setClearInterval();
    return; //함수 종료 아래 코드 실행 안함
  }

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
  //1의 자리 숫자 두 자리 포맷으로 변경해주기
  const format = (time) => {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };
  // 4.6 For-In 문 ; 객체에 주로 사용
  let i = 0;
  for (let tag of documentArr) {
    const remainingTime = format(remainingObj[timeKeys[i]]);
    document.getElementById(tag).textContent = remainingTime;
    i++; // 1씩 증가시킨다 i = i + 1, 프로퍼티의 갯수만큼 조건식 진행
  }
};

const starter = (targetDateInput) => {
  if (!targetDateInput) {
    targetDateInput = dataFromMaker();
  }
  localStorage.setItem("saved-date", targetDateInput);
  container.style.display = "flex";
  messageContainer.style.display = "none";
  setClearInterval();
  counterMaker(targetDateInput); //처음에 한번 실행, 1초 뒤에 실행되는 것은 아래 setInterval
  const intervalId = setInterval(() => {
    counterMaker(targetDateInput);
  }, 1000);

  // for (let i = 0; i < 100; i++) {
  //   setTimeout(() => {
  //     counterMaker();
  //   }, 1000);

  intervalIdArr.push(intervalId);
};

const setClearInterval = function () {
  localStorage.removeItem("saved-date");
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};

const resetTimer = () => {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-day를 입력해 주세요.</h3>";
  messageContainer.style.display = "flex";
  setClearInterval();
};

if (savedDate) {
  //saved data 가 있다면
  starter();
} else {
  console.log("data is null");
}
