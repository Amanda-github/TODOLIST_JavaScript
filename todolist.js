const button = document.querySelector(".addBtn");
const textInput = document.querySelector("#inputField");

button.addEventListener("click", () => {
  const ToDoList = document.querySelector("#list"); //ul
  const task = document.createElement("li"); //li
  task.innerHTML = textInput.value;
  //console.log(task);
  const text = document.getElementById("inputField").value;
  if (text === "") {
    alert("You sure you got nothing to do?");
  } else if (text.length <= 3) {
    alert("Task is too cool for you");
  } else {
    ToDoList.appendChild(task);
  }

  document.getElementById("inputField").value = "";

  task.addEventListener("click", () => {
    ToDoList.removeChild(task);
  });
});
