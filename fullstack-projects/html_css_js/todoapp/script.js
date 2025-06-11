function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  li.appendChild(taskSpan);

  const actionsDiv = document.createElement('div');
  actionsDiv.className = 'actions';

  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Done';
  doneBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => {
    li.remove();
  };

  actionsDiv.appendChild(doneBtn);
  actionsDiv.appendChild(deleteBtn);
  li.appendChild(actionsDiv);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
