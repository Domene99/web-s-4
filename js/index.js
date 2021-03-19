function postTask() {
    var text = document.getElementById("taskText").value;
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    var taskName = document.createElement("label");
    taskName.innerText = text;
    taskName.style.padding = "0px 5px";
    
    document.getElementById("tasks").appendChild(checkbox);
    document.getElementById("tasks").appendChild(taskName);
    document.getElementById("tasks").appendChild(document.createElement("br"));
    
    document.getElementById("taskText").value = "";
}

function deleteAll(){
    document.getElementById("tasks").innerHTML = "";
}

function clearAll(){
    checkboxes = document.getElementsByTagName('input')
    for(const checkbox of checkboxes) {
	if (checkbox.type == "checkbox")
            checkbox.checked = false;
    }

}

function markAll(){
    checkboxes = document.getElementsByTagName('input')
    for(const checkbox of checkboxes) {
	if (checkbox.type == "checkbox")
            checkbox.checked = true;
    }
}
