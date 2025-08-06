document.querySelectorAll('.task').forEach(task => {
  // Toggle completion on task click
  task.addEventListener('click', (e) => {
    // Prevent toggle if remove button was clicked
    if (e.target.classList.contains('remove-btn')) return;
    task.classList.toggle('completed');
  });

  // Remove task on button click
  task.querySelector('.remove-btn').addEventListener('click', () => {
    task.remove();
  });
});
