const todoInput = document.querySelector("#todo-input");

const KeyCodeCheck = () => {
  //Enter keyCode = 13
  //2. 빈 문자열이면? 엔터 안되게 했다.
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    const todoList = document.querySelector("#todo-list");
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");

    newSpan.textContent = todoInput.value; //input value 값을 새로운 span 안에 입력
    newLi.appendChild(newSpan); // li 안에 span이 위치할 수 있도록 명령.
    todoList.appendChild(newLi);
    todoInput.value = "";
  }
};
