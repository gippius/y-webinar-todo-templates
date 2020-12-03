const TODO_LIST = [
    { title: 'Съесть печеньку 🍪' },
    { title: 'Изучить React ⚛️' },
    { title: 'Полить цветы 🌸' },
    { title: 'Сделать свой сайт 👨‍💻' },
    { title: 'Погулять в парке 🌳' },
];
const listContainerElement = document.querySelector('.todo__list');
const inputElement = document.querySelector('.input');

function renderList() {
    let listHTML = '';

    listHTML = TODO_LIST.map(composeItem);

    listContainerElement.append(...listHTML)
}

function composeItem(item) {
    const itemElement = document.createElement('li')
    itemElement.classList.add('todo__item', 'card')
    const headerElement = document.createElement('h2')
    headerElement.classList.add('card__title')
    headerElement.textContent = item.title
    const actionsContainerItem = document.createElement('div')
    actionsContainerItem.classList.add('card__actions')
    const duplicateButtonElement = document.createElement('button')
    duplicateButtonElement.classList.add('button', 'button_duplicate')
    const removeButtonElement = document.createElement('button');
    removeButtonElement.classList.add('button','button_remove')

    actionsContainerItem.append(duplicateButtonElement, removeButtonElement)
    itemElement.append(headerElement, actionsContainerItem)

    return itemElement
}

function bindEventListeners() {
    const addButtonElement = document.querySelector('.button_add');

    addButtonElement.addEventListener('click', function () {
        const newItem = composeItem({ title: inputElement.value })
        console.log(inputElement.value)
        console.log(newItem)
        listContainerElement.append(newItem)
    })
}

renderList();
bindEventListeners();