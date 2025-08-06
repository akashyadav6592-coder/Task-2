document.querySelectorAll('.task').forEach(task => {
  task.addEventListener('click', () => {
    task.classList.toggle('completed');
  });
});
