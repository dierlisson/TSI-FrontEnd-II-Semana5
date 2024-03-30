function addNewTask() {
    var newTask = document.getElementById("newTask").value;
    console.log(newTask);
    if (newTask.length > 0) {
        var li = document.createElement("li");
        var deleteButton = document.createElement("button");
        var finishButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.onclick = deleteTask;
        finishButton.textContent = "Finalizada/Ativa";
        finishButton.onclick = markAsActiveDesactivated;
        li.appendChild(document.createTextNode(newTask));
        li.appendChild(deleteButton);
        li.appendChild(finishButton);
        document.getElementById("taskList").appendChild(li);
        document.getElementById("newTask").value = "";
    }
}

function deleteTask() {
    var li = this.parentNode;
    li.parentNode.removeChild(li);
}
function markAsActiveDesactivated() {
    var li = this.parentNode;
    if (li.value) {
        li.style.textDecoration = "line-through";
        li.style.color = "gray";
        return li.value = false;
    } else {
        li.style.textDecoration = "none";
        li.style.color = "black";
        return li.value = true;
    }
}
/*
function markAsFinished() {
    var li = this.parentNode;
    li.style.textDecoration = "line-through";
    li.style.color = "gray";
    return li.value = false;
}

function markAsActive() {
    var li = this.parentNode;
    li.style.textDecoration = "none";
    li.style.color = "black";
    return li.value = true;
}

var buttons = document.getElementsByClassName("finish");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = markAsFinished;
}

var deleteButtons = document.getElementsByClassName("delete");
for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteTask;
}
*/

// document.getElementById("newTask").onkeydown = function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         addNewTask();
//     }
// };