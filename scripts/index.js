const TODO_LIST = [
    { title: 'Съесть печеньку 🍪' },
    { title: 'Изучить React ⚛️' },
    { title: 'Полить цветы 🌸' },
    { title: 'Сделать свой сайт 👨‍💻' },
    { title: 'Погулять в парке 🌳' },
];

const listContainerElement = document.querySelector('.todo__list');
const inputElement = document.querySelector('input');
const templateElement = document.querySelector('.template')

function renderList() {
    const listItems = TODO_LIST.map(composeItem);

    listContainerElement.append(...listItems);
}

function composeItem(item){
    const newItem = templateElement.content.cloneNode(true);
    const headerElement = newItem.querySelector('.card__title');
    headerElement.textContent = item.title;
    const removeButton = newItem.querySelector('.button_remove');
    removeButton.addEventListener('click', removeItem);
    return newItem;
}

function bindAddItemListener() {
    const addButtonElement = document.querySelector('.button_add');
    addButtonElement.addEventListener('click', addNewItem)
}

function addNewItem(){
        const inputText = inputElement.value;
        const newItem = composeItem({ title: inputText })
        listContainerElement.prepend(newItem);
}

function removeItem(event){
    const targetElement = event.target;
    const targetItem = targetElement.closest('.card');
    targetItem.remove();
}

renderList();
bindAddItemListener();