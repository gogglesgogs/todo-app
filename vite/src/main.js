import './style.css';

document.body.innerHTML = `
<aside class="bar flex">
<div class="flex">
  <ion-icon name="clipboard-outline"></ion-icon>
  <p>Todo App</p>
</div>
<p class="flex">
  Made by
  <img src="https://gogglesinc.github.io/cdn/images/goggles-small.png" alt="" id="goggles" />
  <span>
    <a href="http://someguy403.github.io" target="_blank" rel="noopener noreferrer"> Goggles </a>
  </span>
</p>
</aside>

<div class="edit">
<textarea id="todotext" placeholder="Enter Text Here!"></textarea>

<div class="editaction">
  <div class="dropdown">
    <button class="btn" id="add">Add</button>
    <button class="btn flex"><ion-icon name="chevron-down-outline"></ion-icon></button>
    <div class="dropdown-content">
      <button id="addtotodo">Add to 'Todo' List</button>
      <button id="addtocomplete">Add to 'Completed' List</button>
    </div>
  </div>
  <button id="clearcpl" class="btn">Clear Completed</button>
  <button id="clearall" class="btn">Clear All</button>
</div>
</div>

<main id="app">
<p id="tdt">Todo:</p>
<ul class="list" id="todo"></ul>
<hr />
<p id="cpt">Completed:</p>
<ul class="list" id="complete"></ul>
</main>
`;

const actionsbtn = '<button id="done" class="flex" title="Complete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 176L217.6 336 160 272"></path></svg></button><button id="delete" class="flex" title="Delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128"></path></svg></button>';
const todolist = document.querySelector('#todo');
const completelist = document.querySelector('#complete');
const todotext = document.querySelector('#todotext');
const addbtn = document.querySelector('#add');
const addtotodobtn = document.querySelector('#addtotodo');
const addtocompletebtn = document.querySelector('#addtocomplete');
const clearcompletedbtn = document.querySelector('#clearcpl');
const clearallbtn = document.querySelector('#clearall');
const schema = {
	todo: [],
	completed: []
};

document.addEventListener('DOMContentLoaded', applyeventlistener);
addbtn.addEventListener('click', () => { addhandler('todo'); });
addtotodobtn.addEventListener('click', () => { addhandler('todo'); });
addtocompletebtn.addEventListener('click', () => { addhandler('complete'); });
clearcompletedbtn.addEventListener('click', () => {
	completelist.innerHTML = '';
	updateLocalStorage();
});
clearallbtn.addEventListener('click', () => {
	if (!confirm('Are you sure to delete all todos? This action is IREVERSIBLE')) return;
	completelist.innerHTML = '';
	todolist.innerHTML = '';
	updateLocalStorage();
});

//! Functions
function addhandler (list) {
	const newtodo = todotext.value;
	if (newtodo === '') return;
	if (list === 'todo') addtolist(todolist, newtodo); else if (list === 'complete') addtolist(completelist, newtodo);
}

function applyeventlistener () {
	const donebtns = document.querySelectorAll('#done');
	donebtns.forEach((button) => {
		button.addEventListener('click', donetodo);
	});
	const delbtns = document.querySelectorAll('#delete');
	delbtns.forEach((button) => {
		button.addEventListener('click', deltodo);
	});
};

function donetodo () {
	const currentli = this.parentNode.parentNode;
	if (currentli.parentNode === completelist) return;
	completelist.appendChild(currentli);
	updateLocalStorage();
	applyeventlistener();
}

function deltodo () {
	const currentli = this.parentNode.parentNode;
	currentli.parentNode.removeChild(currentli);
	updateLocalStorage();
	applyeventlistener();
}

function addtolist (list, string) {
	const listitem = document.createElement('li');
	listitem.innerHTML = string;
	listitem.append(actionsdiv());
	listitem.classList.add('flex');
	list.append(listitem);
	updateLocalStorage();
	applyeventlistener();
}

function actionsdiv () {
	const div = document.createElement('div');
	div.classList.add('actions');
	div.classList.add('flex');
	div.innerHTML = actionsbtn;
	return div;
}

function checklist (list) {
	const childs = list.childNodes;
	let array = [];
	childs.forEach(el => {
		array.push(el.innerText);
	});
	array = array.filter(function (el) {
		return el !== undefined;
	});
	return array;
}

function updateLocalStorage () {
	const todos = checklist(todolist);
	const completed = checklist(completelist);
	schema.todo = todos;
	schema.completed = completed;
	localStorage.setItem('todoapp', JSON.stringify(schema));
	applyeventlistener();
}

function getfromLocalStorage () {
	const tdlist = localStorage.getItem('todoapp');
	if (tdlist === null) return;
	const todos = JSON.parse(tdlist);
	todos.todo.forEach(todo => {
		addtolist(todolist, todo);
	});
	todos.completed.forEach(completed => {
		addtolist(completelist, completed);
	});
	applyeventlistener();
}

getfromLocalStorage();
