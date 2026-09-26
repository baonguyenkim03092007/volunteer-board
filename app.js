const tasks = [
    {
        title: "Prepare welcome desk",
        date: "2026-09-27",
        team: "Logistics",
        status: "todo"
    },
    {
        title: "Design recruitment poster",
        date: "2026-09-28",
        team: "Media",
        status: "doing"
    },
    {
        title: "Update volunteer website",
        date: "2026-09-29",
        team: "Developer",
        status: "todo"
    }
];

const taskList = document.querySelector('#task-list');

function render() {
    taskList.textContent = "";


    tasks.forEach(function(task) {
        const li = document.createElement("li");
        li.textContent = task.title;
        taskList.appendChild(li);
    });
}

render();

const newTask = {
        title: "Prepare interview room",
        date: "2026-09-30",
        team: "Logistics",
        status: "todo"
};

tasks.push(newTask);
render();

const taskForm = document.querySelector('#task-form');

const titleInput = document.querySelector("#task-title");
const dateInput = document.querySelector("#task-date");
const teamSelect = document.querySelector("#task-team");
const statusSelect = document.querySelector("#task-status");


taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = titleInput.value.trim();

    if (title === "") {
        console.log("Title is required");
        return;
    }

    const newTask = {
        title: title,
        date: dateInput.value,
        team: teamSelect.value,
        status: statusSelect.value
    };

    tasks.push(newTask);
    render();
    taskForm.reset();
});


