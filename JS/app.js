const addButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');
const totalTask = document.getElementById('total-task');
const undoneTask = document.getElementById('undone');
const doneTask = document.getElementById('done');
let count = 0;
const searching = document.getElementById('search');

addButton.addEventListener('click', function () {
  const task = document.getElementById('task-input');
  const elm = task.value;
  const div = document.createElement('div');
  const p = document.createElement('p');
  const btn = document.createElement('button');
  p.innerText = elm;
  btn.innerText = 'Done';
  btn.classList.add('btn', 'btn-primary', 'task-btn');
  div.appendChild(p);
  div.appendChild(btn);

  taskList.appendChild(div);
  totalCount();
  btnListener();
  task.value = '';
});

function btnListener() {
  const taskButton = document.getElementsByClassName('task-btn');
  for (const tasks of taskButton) {
    tasks.addEventListener('click', function (e) {
      //   console.log(e.target);
      e.target.parentNode.style.color = 'red';
      e.target.parentNode.style.padding = '10px';
      e.target.parentNode.style.border = '3px solid red';
      if (e.target.innerText == 'Done') {
        e.target.innerText = 'Compeleted';
        e.target.disabled = true;
        console.log(e.target);
        count++;
        console.log(count);
      }
      totalCount();
    });
  }
}

// all task function started

function totalCount() {
  totalTask.innerText = parseInt(taskList.childElementCount);
  doneTask.innerText = count;
  undoneTask.innerText = parseInt(totalTask.innerText) - count;
}

searching.onkeyup = function (e) {
  console.log(e.target.value);
  const totalNodes = taskList.children;
  for (let i = 0; i < totalNodes.length; i++) {
    if (
      taskList.children[i].childNodes[0].innerText.includes(e.target.value) !=
      true
    ) {
      taskList.children[i].style.display = 'none';
    } else {
      taskList.children[i].style.display = 'block';
    }
  }
};
