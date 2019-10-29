const modal = document.forms.modal;
const modalWindow = document.querySelector('.modal');
let todoList = [];

// Open modal window
const openModal = () => {
	modalWindow.className = 'modal modal-opened';
};

// Close modal window with clear input fields
const closeModal = () => {
	modalWindow.className = 'modal';
	clearInputFields(modal.title, modal.description);
	modal.title.style.border = '2px solid #dde0e3';
};

const clearInputFields = (title, description) => {
	title.value = '';
	description.value = '';
};

// Creates new todo item and puts it to DOM
const createCard = () => {
	openModal();
	modal.save.onclick = () => {
		if (checkTitle(modal.title)) {
			let cardList = document.querySelector('.list');
			cardList.innerHTML = innerCard(modal.title, modal.description, modal.priority) + cardList.innerHTML;
			closeModal();
		}
	};
};

// Allows to make changes to an existing todo item
const editCard = (card) => {
	const cardTitle = card.querySelector('.card-title').textContent;
	const cardText = card.querySelector('.card-text').textContent;
	const cardPriority = card.querySelector('.state-priority').textContent;
	modal.title.value = cardTitle;
	modal.description.value = cardText;
	modal.priority.value = cardPriority;
	openModal();

	modal.save.onclick = () => {
		if (checkTitle(modal.title)) {
			card.innerHTML = innerEditCard(modal.title, modal.description, modal.priority);
			card.className = 'card Open';
			closeModal();
		}
	};
};

// Move card to done status
const doneCard = (card) => {
	card.className = 'card Done';
};

// Filter by search data, status item and prioruty level
const cardFilter = () => {
	const searchText = document.forms.filter.search.value;
	const statusText = document.forms.filter.status.value;
	const priorityText = document.forms.filter.priority.value;
	const reg = new RegExp(searchText, 'i');
	let cards = document.querySelectorAll('.card');

	cards.forEach(card => {
		const cardTitle = card.querySelector('.card-title').textContent;
		const cardStatus = card.className.slice(5);
		const cardPriority = card.querySelector('.state-priority').textContent;

		card.style.display = 'none';

		if (filterByName(cardTitle, reg) &&
			filterByStatus(cardStatus, statusText) &&
			filterByPriority(cardPriority, priorityText)) {
			card.style.display = 'flex';
		}
	});
};

const filterByName = (title, filterText) => (title.search(filterText) !== -1);

const filterByStatus = (status, filterStatus) => (status === filterStatus || filterStatus == 'All');

const filterByPriority = (priority, filterPriority) => (priority === filterPriority || filterPriority === "All");


// Check title input field
const checkTitle = (title) => {
	if (!title.value) {
		title.style.border = '2px solid #ea2929';
		return;
	}
	title.style.border = '2px solid #dde0e3';
	return true;
};

// Adds new todo item on a page
const innerCard = (title, description, priority) => {
	return `
	<div class="card Open" onclick="cardSetting(event)">
		<input type="checkbox" class="card-checkbox" checked>
		<strong class="card-title">${title.value}</strong>
		<span class="card-text">${description.value}</span>
		<div class="state">
			<span class="state-priority ${priority.value}">${priority.value}</span>
			<nav>
				<ul class="setting">
					<li class="setting-list">
						<a href="#" class="setting-btn">...</a>
						<ul class="setting-drop">
							<li><a href="#" class="done">Done</a></li>
							<li><a href="#" class="edit">Edit</a></li>
							<li><a href="#" class="delete">Delete</a></li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	</div>
	`;
};

// Adds changes an existing todo item on a page
const innerEditCard = (title, description, priority) => {
	return `
	<input type="checkbox" class="card-checkbox" checked>
	<strong class="card-title">${title.value}</strong>
	<span class="card-text">${description.value}</span>
	<div class="state">
		<span class="state-priority ${priority.value}">${priority.value}</span>
		<nav>
			<ul class="setting">
				<li class="setting-list">
					<a href="#" class="setting-btn">...</a>
					<ul class="setting-drop">
						<li><a href="#" class="done">Done</a></li>
						<li><a href="#" class="edit">Edit</a></li>
						<li><a href="#" class="delete">Delete</a></li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
	`;
};

const addTodoItem = (title, description, priority) => {
	return {
		title: title.value,
		description: description.value,
		priority: priority.value
	};
};

const cardSetting = (e) => {
	e.preventDefault();
	const choice = e.target.className;
	const card = e.currentTarget;
	if (choice === 'done' || choice === 'card-checkbox') {
		doneCard(card);
	}
	if (choice === 'edit') {
		editCard(card);
	}
	if (choice === 'delete') {
		card.remove();
	}
};