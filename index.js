let input = document.getElementById("input-button");
let taskList = document.getElementById("task-list");

function addTask() {
  let taskValue = input.value;

  if (taskValue.trim() === "") {
    return;
  }

  let newTask = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let taskText = document.createElement("span");
  taskText.textContent = taskValue;


  newTask.appendChild(checkbox);
  newTask.appendChild(taskText);
  taskList.appendChild(newTask);

  input.value = "";


   checkbox.addEventListener("change", function () {
     taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
   });
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

let button = document.querySelector(".task-button");

button.addEventListener("click", addTask);
