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
    let lengthHours = document.getElementById("lengthSelectHours").value;
    let lengthMinutes = document.getElementById("lengthSelectMinutes").value;
    let lengthBreak = document.getElementById("breakSelect");

    let priorityText;
    let urgencyText;
    let urgencyClass;
    let lengthHoursText;
    let lengthMinutesText;
    let lengthBreakText;

    if (lengthBreak.checked == true) {
        lengthBreakText = "Break!"
        lengthHoursText = "";
        lengthMinutesText = "";
    } else {
        lengthBreakText = "";

        if (lengthHours == 0) {
            lengthHoursText = "";
        } else if (lengthHours > 0) {
            lengthHoursText = lengthHours + " h";
        }

        if (lengthMinutes == 0) {
            lengthMinutesText = "";
        } else if (lengthMinutes > 0) {
            lengthMinutesText = lengthMinutes + " min";
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
        urgencyClass = "today"
    } else if (urgency == 2) {
        urgencyText = "Tomorrow"
        urgencyClass = "tomorrow"
    } else if (urgency == 3) {
        urgencyText = "Has time"
        urgencyClass = "hasTime"
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
                    <td>${lengthHoursText} ${lengthMinutesText}${lengthBreakText}</td>`;
    tbody.appendChild(tr);
    
    modal.hide()
    document.getElementById("modalForm").reset();
    document.getElementById("addTask").value = "";
});
