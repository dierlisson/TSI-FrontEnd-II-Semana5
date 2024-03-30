function addNewTask() {
    var newTask = document.getElementById("newTask").value;
    console.log(newTask);
    if (newTask.length > 0) {
        var li = document.createElement("li");
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.onclick = deleteTask;
        li.appendChild(document.createTextNode(newTask));
        li.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(li);
        document.getElementById("newTask").value = "";
    }
}

function deleteTask() {
    var li = this.parentNode;
    li.parentNode.removeChild(li);
}

function markAsFinished() {
    var li = this.parentNode;
    li.style.textDecoration = "line-through";
    li.style.color = "gray";
}

function markAsActive() {
    var li = this.parentNode;
    li.style.textDecoration = "none";
    li.style.color = "black";
}

var buttons = document.getElementsByClassName("finish");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = markAsFinished;
}

var deleteButtons = document.getElementsByClassName("delete");
for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteTask;
}

// document.getElementById("newTask").onkeydown = function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         addNewTask();
//     }
// };