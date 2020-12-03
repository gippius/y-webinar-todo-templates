const TODO_LIST = [
    { title: 'Съесть печеньку 🍪' },
    { title: 'Изучить React ⚛️' },
    { title: 'Полить цветы 🌸' },
    { title: 'Сделать свой сайт 👨‍💻' },
    { title: 'Погулять в парке 🌳' },
];
const listContainerElement = document.querySelector('.todo__list');
const inputElement = document.querySelector('.input');
const templateElement = document.querySelector('#card-template');

function renderList() {
    let listHTML = '';
    listHTML = TODO_LIST.map(composeItem);
    listContainerElement.append(...listHTML)
}

function composeItem(item){
    const itemElement = templateElement.cloneNode(true).content;
    const headerElement = itemElement.querySelector('.card__title');
    headerElement.textContent = item.title;
    
    itemElement.querySelector('.button_remove').addEventListener('click', (event) => {
        const targetItemElement = event.target;
        targetItemElement.closest('.card').remove();
    })
    
    return itemElement;
}

function bindEventListeners() {
    const addButtonElement = document.querySelector('.button_add');

    addButtonElement.addEventListener('click', function () {
        const newItem =  composeItem({ title: inputElement.value })
        listContainerElement.prepend(newItem)
    })
}

renderList();
bindEventListeners();