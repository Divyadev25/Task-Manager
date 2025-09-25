const date= document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const allMonths = ["January","Febraury","March","April","May","June","July","August","September","October","November","December"];

date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML =today.getFullYear();

// To-Do List JS
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;
    let li = document.createElement("li");
    li.innerHTML = `<span onclick="toggleDone(this)">${taskText}</span>
        <button onclick="removeTask(this)">❌</button>`;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
function toggleDone(element) {
    element.parentElement.classList.toggle("done");
}
function removeTask(button) {
    button.parentElement.remove();
}















