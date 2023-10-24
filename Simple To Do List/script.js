const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.className = "taskItem";
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button>Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";

    taskItem.querySelector("button").addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
