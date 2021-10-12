let modal = new bootstrap.Modal(document.getElementById("modal"));

let createTaskButton = document.getElementById("createTaskButton");
let createTask = document.getElementById("modalTask");

createTaskButton.addEventListener("click", function () {
    createTask.innerHTML = document.getElementById("createTask").value;
});

let addTaskButton = document.getElementById("addTask");
let tbody = document.getElementById("tbody");
let cont = 1;
let i=0;
addTaskButton.addEventListener("click", function () {
    let task = document.getElementById("createTask").value;
    if (task == "") {
        task = `Task ${cont++}`;
    }
    let priority = document.getElementById("prioritySelect").value;
    let urgency = document.getElementById("urgencySelect").value;
    let hours = document.getElementById("modalHours").value;
    let minutes = document.getElementById("modalMinutes").value;
    let SlcBreak = document.getElementById("breakSelect");

    let priorityText;
    let urgencyText;
    let urgencyClass;
    let hoursText;
    let hoursClass;
    let minutesText;
    let SlcBreakText;

    if (SlcBreak.checked == true) {
        SlcBreakText = "Break!"
        hoursClass="red"
        hoursText = "";
        minutesText = "";
    } else {
        SlcBreakText = "";
        
        if (hours > 0) {
            hoursText = hours + " h";
            hoursClass="yellow"
        } else {
            hoursText = "";
            hoursClass="green"
        }

        if (minutes > 0) {
            minutesText = minutes + " min";
        } else  {
            minutesText = "";
        }
    };

    if (priority == 1) {
        priorityText = "MINOR";
    } else if (priority == 2) {
        priorityText = "MEDIUM"
    } else if (priority == 3) {
        priorityText = "MAJOR"
    }

    if (urgency == 1) {
        urgencyText = "Today"
        urgencyClass = "red"
    } else if (urgency == 2) {
        urgencyText = "Tomorrow"
        urgencyClass = "yellow"
    } else if (urgency == 3) {
        urgencyText = "Has time"
        urgencyClass = "green"
    }
    i++;
    let tr = document.createElement("tr");
    tr.setAttribute("class", "task");
    tr.innerHTML = `<td>
                        <input
                        type="checkbox"
                        id="checkDone"
                        class="checkDone"/>
                        <label class="form-check-label" for="checkDone">  ${task}</label>
                    </td>
                    <td class="priority"><div class="${priorityText}">${priorityText}</div></td>
                    <td><div class="urgency ${urgencyClass}">${urgencyText}</div></td>
                    <td><div class="${hoursClass}">${hoursText} ${minutesText}${SlcBreakText}</div></td>`;
    tbody.appendChild(tr);
    
    modal.hide()
    document.getElementById("modalForm").reset();
    document.getElementById("addTask").value = "";
});
