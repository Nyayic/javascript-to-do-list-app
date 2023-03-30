let toDoList = [];
let form = document.querySelector("form");
// preventing default-----
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let input = document.querySelector("input");
  let newTask = input.value;
  toDoList.push(newTask);
  input.value = "";
});

//call display function
  
function displayToDoList() {
    let ul = document.createElement("ul");
    toDoList.forEach(function(item) {
      let li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  
    document.body.appendChild(ul);
  }
  
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let input = document.querySelector("input");
    let newTask = input.value;
    toDoList.push(newTask);
    input.value = "";
    displayToDoList();
  });
  
