const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add new task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task';
  li.innerHTML = `
    ${taskText}
    <button class="remove-btn">✖</button>
  `;
  taskList.appendChild(li);
  taskInput.value = '';
});

// Handle complete and delete using event delegation
taskList.addEventListener('click', (e) => {
  const target = e.target;
  const taskItem = target.closest('.task');

  if (!taskItem) return;

  if (target.classList.contains('remove-btn')) {
    taskItem.remove();
  } else {
    taskItem.classList.toggle('completed');
  }
});
