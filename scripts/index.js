const TODO_LIST = [
    { title: 'Съесть печеньку 🍪' },
    { title: 'Изучить React ⚛️' },
    { title: 'Полить цветы 🌸' },
    { title: 'Сделать свой сайт 👨‍💻' },
    { title: 'Погулять в парке 🌳' },
];

const listContainerElement = document.querySelector('.todo__list');
const inputElement = document.querySelector('input');

function renderList() {
    const listItems = TODO_LIST.map(composeItem);

    listContainerElement.append(...listItems);
}

function composeItem(item){
    const cardItem = document.createElement('li')
    cardItem.classList.add('todo__item', 'card')
    const cardHeader = document.createElement('h2')
    cardHeader.classList.add('card__title')
    cardHeader.textContent = item.title;
    const cardActions = document.createElement('div')
    cardActions.classList.add('card__actions')
    const duplicateButton = document.createElement('button')
    duplicateButton.classList.add('button', 'button_duplicate')
    const removeButton = document.createElement('button')
    removeButton.classList.add('button', 'button_remove')

    cardActions.append(duplicateButton, removeButton)
    cardItem.append(cardHeader, cardActions)

    return cardItem
}

function bindAddItemListener() {
    const addButtonElement = document.querySelector('.button_add');
    addButtonElement.addEventListener('click', addNewItem)
}

function addNewItem(){
        const inputText = inputElement.value;
        const newItemHTML = composeItem({ title: inputText })
        listContainerElement.prepend(newItemHTML);
}

renderList();
bindAddItemListener();