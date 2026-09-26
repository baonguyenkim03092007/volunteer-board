let tasks = [
    {
        id: crypto.randomUUID(),
        title: "Prepare welcome desk",
        date: "2026-09-27",
        team: "Logistics",
        status: "todo"
    },
    {
        id: crypto.randomUUID(),
        title: "Design recruitment poster",
        date: "2026-09-28",
        team: "Media",
        status: "doing"
    },
    {
        id: crypto.randomUUID(),
        title: "Update volunteer website",
        date: "2026-09-29",
        team: "Developer",
        status: "todo"
    }
];

const taskList = document.querySelector("#task-list");

const taskForm = document.querySelector("#task-form");
const titleInput = document.querySelector("#task-title");
const dateInput = document.querySelector("#task-date");
const teamSelect = document.querySelector("#task-team");
const statusSelect = document.querySelector("#task-status");


function render() {
    taskList.textContent = "";

    tasks.forEach(function(task) {
        const li = document.createElement("li");

        const text = document.createElement("span");
        text.textContent = task.title;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        
        deleteButton.addEventListener("click", function() {
            tasks = tasks.filter(function(item) {
                return item.id !== task.id;
            });
            render();
        });

        li.appendChild(text);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });

}


taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = titleInput.value.trim();

    if (title === "") {
        console.log("Title is required");
        return;
    }

    const newTask = {
        id: crypto.randomUUID(),
        title: title,
        date: dateInput.value,
        team: teamSelect.value,
        status: statusSelect.value
    };

    tasks.push(newTask);
    render();
    taskForm.reset();

    console.log(tasks);
});


render();