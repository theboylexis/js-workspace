//variables for id's
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//defining addTask() function
function addTask () {
    if(inputBox.value === "") {
        alert("You must enter a task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); //li is displayed under listContainer
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData ();
}
//creating click function
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData ();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentNode.remove();
        saveData ();
    }
}, false);
//function to store tasks
function saveData () {
    localStorage.setItem("data", listContainer.innerHTML);
}
//function to display data after reloading or restarting page
function showTask () {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
showTask();