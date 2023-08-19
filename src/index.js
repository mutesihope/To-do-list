/* eslint-disable no-use-before-define */
import './style.css';

// document.addEventListener('DOMContentLoaded', () => {
//   const inputField = document.querySelector('#text-input-field');
//   const addButton = document.querySelector('#add-button');
//   const todosList = document.querySelector('.todos-list');

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
  todos.sort((a, b) => a.index - b.index);
  const autoCreate = document.querySelector('.taskholder');
  const ul = document.createElement('ul');
  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.textContent = todos.task;

    if (todo.completed) {
      li.classList.add('completed');
    }
    ul.appendChild('li');
  });

  autoCreate.appendChild('ul');
}
document.addEventListener('DOMContentLoaded', dotolist);
