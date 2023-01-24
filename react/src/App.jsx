import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import './Edits.css';

function App () {
	const [newItem, setnewItem] = useState('');
	const [items, setItems] = useState([]);

	useEffect(() => {
		getfromLocalStorage();
	}, []);

	function addItem (completed) {
		if (!newItem) return;
		const item = {
			id: uuidv4(),
			value: newItem,
			completed
		};
		const newarray = items;
		newarray.push(item);
		setItems(newarray);
		setnewItem('');
		updateLocalStorage(newarray);
	}

	function delItem (id) {
		const newarray = items.filter(item => item.id !== id);
		setItems(newarray);
		updateLocalStorage(newarray);
	}

	function doneItem (id) {
		const newarray = items.map((item) => {
			if (item.id === id) {
				item.completed = true;
				return item;
			} else return item;
		});
		setItems(newarray);
		updateLocalStorage(newarray);
	}

	function clearcpl () {
		const newarray = items.filter(item => item.completed !== true);
		setItems(newarray);
		updateLocalStorage(newarray);
	}

	function clearall () {
		if (!confirm('Are you sure to delete all todos? This action is IREVERSIBLE')) return;
		setItems([]);
		updateLocalStorage([]);
	}

	function updateLocalStorage (text) {
		localStorage.setItem('todoapp-react', JSON.stringify(text));
	}

	function getfromLocalStorage () {
		const data = JSON.parse(localStorage.getItem('todoapp-react'));
		if (data === null) return;
		setItems(data);
	}

	return (
		<main id="app">
			<div className="edit">
				<textarea id="todotext" placeholder="Enter Text Here!" value={newItem} onChange={(e) => setnewItem(e.target.value)}></textarea>
				<div className="editaction">
					<div className="dropdown">
						<button className="btn" id="add" onClick={() => addItem(false)}>Add</button>
						<button className="btn flex">
							<ion-icon name="chevron-down-outline"></ion-icon>
						</button>
						<div className="dropdown-content">
							<button id="addtotodo" onClick={() => addItem(false)}>Add to &apos;Todo&apos; List</button>
							<button id="addtocomplete" onClick={() => addItem(true)}>Add to &apos;Completed&apos; List</button>
						</div>
					</div>
					<button id="clearcpl" className="btn" onClick={() => clearcpl()}>
						Clear Completed
					</button>
					<button id="clearall" className="btn" onClick={() => clearall()}>
						Clear All
					</button>
				</div>
			</div>
			<p id="tdt">Todo:</p>
			<ul className="list" id="todo">
				{items.map(item => {
					if (item.completed === false) {
						return (
							<li className="flex" key={item.id}>
								{item.value}
								<div className="actions flex">
									<button id="done" className="flex" title="Complete" onClick={() => doneItem(item.id)}>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
											<path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></path>
											<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352 176L217.6 336 160 272"></path>
										</svg>
									</button>
									<button id="delete" className="flex" title="Delete" onClick={() => delItem(item.id)}>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
											<path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></path>
											<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M320 320L192 192M192 320l128-128"></path>
										</svg>
									</button>
								</div>
							</li>
						);
					} else return undefined;
				})}
			</ul>
			<hr />
			<p id="cpt">Completed:</p>
			<ul className="list" id="complete">
				{items.map(item => {
					if (item.completed === true) {
						return (
							<li className="flex" key={item.id}>
								{item.value}
								<div className="actions flex">
									<button id="done" className="flex" title="Complete">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
											<path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></path>
											<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352 176L217.6 336 160 272"></path>
										</svg>
									</button>
									<button id="delete" className="flex" title="Delete" onClick={() => delItem(item.id)}>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
											<path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></path>
											<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M320 320L192 192M192 320l128-128"></path>
										</svg>
									</button>
								</div>
							</li>
						);
					} else return undefined;
				})}
			</ul>
		</main>
	);
}

export default App;
