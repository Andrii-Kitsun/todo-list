let createCard= document.querySelector('.control-btn');
let modal = document.querySelector('.modal');
let saveCard = document.querySelector('#save');
let cancelModal = document.querySelector('#cancel');
let title = modal.querySelector('.form-title');
let descr = modal.querySelector('.form-descr');
let priority = modal.querySelector('.form-priority');
let cardList = document.querySelector('.list');

createCard.addEventListener('click', () => {
  openModal();
});

let openModal = () => {
  modal.style.opacity = 1;
  modal.style['pointer-events'] = 'all';
};

saveCard.addEventListener('click', () => {
  if (checkTitle(title)) {
    cardList.innerHTML += addCard(title, descr, priority);
    closeModal();  
  }
});

let checkTitle = (title) => {
  if (!title.value) {
    title.style.border = '2px solid #ea2929';
    return;
  }
  title.style.border = '2px solid #dde0e3';
  return true;
}

let addCard = (title, description, priority) => {
  return `
    <div class="card">
      <strong class="card-title">${title.value}</strong>
      <span class="card-text">${description.value}</span>
      <div class="state">
        <span class="state-priority">${priority.value}</span>
        <select class="state-setting">
          <option value="Done">Done</option>
          <option value="Edit">Edit</option>
          <option value="Delete">Delete</option>
        </select>
      </div>
    </div>
  `;
}

let closeModal = () => {
  modal.style.opacity = 0;
  modal.style['pointer-events'] = 'none';
  clearInputFields(title, descr);
  title.style.border = '2px solid #dde0e3';
};

cancelModal.addEventListener('click', () => {
  closeModal();
});

//  If the user clicks outside the block
modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    closeModal();
  }
});

let clearInputFields = (title, description) => {
  title.value = '';
  description.value = '';
}