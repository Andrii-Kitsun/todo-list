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
			cardList.innerHTML += innerCard(modal.title, modal.description, modal.priority);
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
			closeModal();
		}
	};
};

// Searches given substring in card title
const filterCardByName = () => {
	const filter = document.forms.filter;
	const cards = document.querySelectorAll('.card');

	cards.forEach(card => {
		const title = card.querySelector('.card-title').textContent;
		if (!filter.search.value) {
			card.style.display = 'flex';
			return;
		}

		let reg = new RegExp(filter.search.value, 'i');
		if (title.search(reg) === -1) {
			card.style.display = 'none';
		}
	});
};

// Compares input priority level with card priority value
const filterByPriority = () => {
	const filter = document.forms.filter;
	const cards = document.querySelectorAll('.card');
	cards.forEach(card => card.style.display = 'flex');	// Show all items

	cards.forEach(card => {
		const cardPriority = card.querySelector('.state-priority').textContent;
		if (filter.priority.value === 'All') {
			card.style.display = 'flex';
			return;
		}

		if (cardPriority !== filter.priority.value) {
			card.style.display = 'none';
		}
	});

};

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
		<div class="card" onclick="cardSetting(event)">
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
	const choice = e.target.className;
	const card = e.currentTarget;
	if (choice === 'done') {
		
	}
	if (choice === 'edit') {
		editCard(card);
	}
	if (choice === 'delete') {
		card.remove();
	}
};