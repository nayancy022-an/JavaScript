// ============================
// STEP 2: Elements select karna
// ============================
const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');
const errorMsg = document.querySelector('#errorMsg');
const taskCount = document.querySelector('#taskCount');


// ============================
// STEP 5: Tasks array + localStorage
// ============================
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


// ============================
// Add button click event
// ============================
addBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    errorMsg.classList.remove('hidden');
    return;
  }

  errorMsg.classList.add('hidden');

  addTask(taskText);
  taskInput.value = '';
});


// ============================
// Naya task array mein add karna
// ============================
function addTask(text) {
  const task = { text: text, completed: false };
  tasks.push(task);
  saveTasks();
  renderTasks();
}


// ============================
// Array se pura list render karna
// ============================
function renderTasks() {
  taskList.innerHTML = ''; // pehle list khali karo

  tasks.forEach(function (task, index) {
    const li = document.createElement('li');
    li.classList.add('task');
    if (task.completed) {
      li.classList.add('completed');
    }
    li.dataset.index = index;

    li.innerHTML = `
      <span class="task-text">${task.text}</span>
      <button class="deleteBtn">❌</button>
    `;

    taskList.appendChild(li);
  });

  updateCount();
}


// ============================
// Task count update karna
// ============================
function updateCount() {
  const totalTasks = tasks.length;
  taskCount.textContent = `${totalTasks} tasks left`;
}


// ============================
// Event Delegation: delete + complete toggle
// ============================
taskList.addEventListener('click', function (event) {
  const clickedElement = event.target;
  const li = clickedElement.closest('li');
  if (!li) return;

  const index = Number(li.dataset.index);

  if (clickedElement.classList.contains('deleteBtn')) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }

  if (clickedElement.classList.contains('task-text')) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
  }
});


// ============================
// Page load hote hi purana data dikhado
// ============================
renderTasks();