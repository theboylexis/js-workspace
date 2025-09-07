//displaying input box
const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box"); //selects all notes

function showNotes () {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes ()

function updateStorage () {
    localStorage.setItem("notes", notesContainer.innerHTML)
}

//adding a function for when the create notes button is clicked
createButton.addEventListener("click", ()=>{
    let inputBox = document.createElement("p") //element created and stored as inputBox in p tag
    let img = document.createElement("img") //element created and stored as img in img tag
    inputBox.className = "input-box"; //input-box class added in p tag
    inputBox.setAttribute("contenteditable", "true") //content-editable and true attributes added to p tag
    img.src = "notes-app-img/images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(img) //inputBox is displayed in notesContainer and delete icon will be added in inputBox
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage ();
    }
    else if(e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage ()
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
