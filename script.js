let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Por favor, digite uma tarefa.');
    return;
  }

  const task = {
    id: tasks.length + 1,
    text: taskText,
  };

  tasks.push(task);
  taskInput.value = '';


  displayTasks();
}


function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; 

  tasks.forEach(task => {
    const listItem = document.createElement('li');
    listItem.textContent = `${task.text} (ID: ${task.id})`;

   
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.onclick = () => editTask(task.id);
    listItem.appendChild(editButton);


    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.onclick = () => removeTask(task.id);
    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);
  });
}


function editTask(taskId) {
  const updatedText = prompt('Digite a nova descrição da tarefa:');

  if (updatedText !== null) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].text = updatedText;
    displayTasks();
  }
}


function removeTask(taskId) {
  const confirmRemove = confirm('Tem certeza que deseja remover esta tarefa?');

  if (confirmRemove) {
    tasks = tasks.filter(task => task.id !== taskId);
    displayTasks();
  }
}



function getTaskById() {
    const taskIdInput = document.getElementById('taskIdInput');
    const taskId = parseInt(taskIdInput.value);
  
    if (isNaN(taskId) || taskId <= 0) {
      alert('Por favor, digite um ID válido.');
      return;
    }
  
    const foundTask = tasks.find(task => task.id === taskId);
  
    if (foundTask) {
      alert(`Tarefa encontrada: ${foundTask.text}`);
    } else {
      alert(`Nenhuma tarefa encontrada com o ID: ${taskId}`);
    }
  
    taskIdInput.value = ''; 
  }
  
displayTasks();