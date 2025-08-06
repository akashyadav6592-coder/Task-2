
document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addButton");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
      taskList.appendChild(listItem);
      taskInput.value = ""; // Clear input after adding
    } else {
      alert("Please enter a task.");
    }
  });
});

