//  Declairing Variables
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add todo Function

function addTask() {
  //  Using Global Variable inputbox
  // checking if input is empty
  if (inputBox.value === "") {
    alert("Field must be Filled");
  }
  // If input got any value make a new li
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    //  Making a Variable to create delete button through javascript
    let span = document.createElement("span");
    // assigning its innerHTML with cross code
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  // After adding a todo make input field null
  inputBox.value = "";
  onlocalStorage();
}

// Adding an eventListenr to see where click target
listContainer.addEventListener(
  "click",
  (e) => {
    // if clicked text. This will  add class name  .checked
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      onlocalStorage();
    } 
    // Or if click on span. Delete the text
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      onlocalStorage();
    }
  },
  false
);

// To save on local Storage
function onlocalStorage() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// To show data back to listContainer after refreshing 
// by getting localStorage.getItem Function
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    addTask();
  }
}


showData();
