/* eslint-disable no-use-before-define */
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.querySelector('#text-input-field');
  const addButton = document.querySelector('#add-button');
  const todosList = document.querySelector('.todos-list');

  let todos = [
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

  // Render existing todos on page load
  todos.forEach(renderTodo);

  addButton.addEventListener('click', (event) => {
    event.preventDefault();

    const newTask = inputField.value.trim();
    if (newTask.length === 0) {
      return;
    }

    const newTodo = {
      task: newTask,
      completed: false,
      id: todos.length + 1,
    };

    todos.push(newTodo);

    inputField.value = '';

    renderTodo(newTodo);
  });

  function renderTodo(todo) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.id = `todo-${todo.id}`;
    todosList.appendChild(todoItem);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'todo-checkbox';
    checkbox.checked = todo.completed;
    todoItem.prepend(checkbox);

    const taskText = document.createElement('p');
    taskText.classList.add('task-text');
    taskText.innerText = todo.task;
    todoItem.appendChild(taskText);

    taskText.addEventListener('click', () => {
      taskText.contentEditable = true;
      taskText.focus();
    });

    taskText.addEventListener('blur', () => {
      taskText.contentEditable = false;
      // todo.task = taskText.innerText;
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash');
    deleteButton.appendChild(deleteIcon);
    todoItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
      const parent = deleteButton.parentElement;
      parent.parentElement.removeChild(parent);
      // removeSeparator(parent.id);
    });

    const separator = document.createElement('hr');
    separator.id = `${todoItem.id}-separator`;
    todosList.appendChild(separator);
  }

  function removeSeparator(todoId) {
    const separatorId = `${todoId}-separator`;
    const separator = document.getElementById(separatorId);
    if (separator) {
      separator.parentElement.removeChild(separator);
    }
  }
  const clearButton = document.querySelector('.clear-button');

  clearButton.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('.todo-item input[type="checkbox"]:checked');
    completedTasks.forEach((task) => {
      const parent = task.parentElement;
      parent.parentElement.removeChild(parent);
      const todoId = parent.id;
      removeSeparator(todoId);
    });
  });

  function setupRefresh() {
    const refreshIcon = document.querySelector('.refresh-icon');
    refreshIcon.addEventListener('click', () => {
      todos = [];
      todosList.innerHTML = '';
    });
  }

  setupRefresh();
});
