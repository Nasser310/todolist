$(document).ready(function () {
    $(document).on("swiperight", "#enCours .task-item", function () {
        $(this).appendTo("#terminees");
    });

    $(document).on("swiperight", "#terminees .task-item", function () {
        $(this).appendTo("#enCours");
    });

    $(document).on("swipeleft", ".task-item", function () {
        $(this).hide();
    });
});

function ajouterTache() {
    var taskInput = document.getElementById('task');
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var newTask = document.createElement('li');
        newTask.textContent = taskText;
        newTask.className = 'task-item';
        document.getElementById('enCours').appendChild(newTask);
        taskInput.value = "";
    } else {
        alert("Veuillez entrer une tâche.");
    }
}

function reinitialiserTaches() {
    document.getElementById('terminees').innerHTML = '';
}
