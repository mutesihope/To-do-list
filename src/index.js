import './style.css';

const todos = [
  {
    task: 'Go to the gym',
    completed: false,
    id: 1,
  },
  {
    task: 'Wash the car',
    completed: false,
    id: 2,
  },
];

function dotolist() {
  todos.sort((a, b) => a.id - b.id); // Corrected sorting based on the 'id' property

  const autoCreate = document.getElementById('taskholder');

  const ul = document.createElement('ul');

  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.textContent = todo.task;

    if (todo.completed) {
      li.classList.add('completed');
    }

    ul.appendChild(li);
  });

  autoCreate.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', dotolist);
