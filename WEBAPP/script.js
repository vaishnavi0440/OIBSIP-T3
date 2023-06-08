function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
  
    if (task === "") {
      alert("Please enter a task!");
      return;
    }
  
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    var textNode = document.createTextNode(task);
    li.appendChild(textNode);
  
    li.addEventListener("click", function() {
      this.classList.toggle("completed");
    });
  
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
      this.parentNode.remove();
    });
    li.appendChild(deleteButton);
  
    var colorSelect = document.createElement("select");
    colorSelect.innerHTML = `
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
    `;
    colorSelect.addEventListener("change", function() {
      li.className = "";
      li.classList.add(this.value);
    });
    li.appendChild(colorSelect);
  
    taskList.appendChild(li);
  
    input.value = "";
  }
  
  var input = document.getElementById("taskInput");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      addTask();
    }
  });