/* eslint-disable no-shadow */
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const schedule = [
    { description: 'Coding', completed: false, index: 1 },
    { description: 'Drinking', completed: true, index: 2 },
    { description: 'Reading', completed: false, index: 3 },
  ];

  function populateTaskList(schedule) {
    const taskList = document.getElementById('schedule');

    schedule.sort((a, b) => a.index - b.index);

    schedule.forEach((task) => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-item');

      const listDiv = document.createElement('div');
      listDiv.classList.add('list-div');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('check');
      checkbox.checked = task.completed;
      // eslint-disable-next-line func-names
      checkbox.addEventListener('change', function () {
        if (this.checked) {
          listItem.classList.add('completed');
        } else {
          listItem.classList.remove('completed');
        }
      });

      const description = document.createElement('p');
      description.textContent = task.description;

      const ellipsisIcon = document.createElement('i');
      ellipsisIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');

      listDiv.appendChild(checkbox);
      listDiv.appendChild(description);
      listItem.appendChild(listDiv);
      listItem.appendChild(ellipsisIcon);

      taskList.appendChild(listItem);
    });
  }

  populateTaskList(schedule);
});
