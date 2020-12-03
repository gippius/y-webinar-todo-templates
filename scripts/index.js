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

function composeItem({ title }){
    const newItem = templateElement.content.cloneNode(true);
    const headerElement = newItem.querySelector('.card__title');
    headerElement.textContent = title;
    addRemoveAndDuplicateListenersToItem(newItem)
    return newItem;
}

function addRemoveAndDuplicateListenersToItem(item){       
    const removeButton = item.querySelector('.button_remove');
    removeButton.addEventListener('click', removeItem);
    const duplicateButton = item.querySelector('.button_duplicate')
    duplicateButton.addEventListener('click', duplicateItem)
}

function bindAddItemListener() {
    const addButtonElement = document.querySelector('.button_add');
    addButtonElement.addEventListener('click', addNewItem)
}

function addNewItem(){
        const inputText = inputElement.value;
        const newItem = composeItem({ title: inputText })
        listContainerElement.prepend(newItem);
        inputElement.value = ''
}

function removeItem(event){
    const targetItem = event.target.closest('.card');
    targetItem.remove();
}

function duplicateItem(event){
    const targetItem = event.target.closest('.card');
    const headerElement = targetItem.querySelector('.card__title');
    const title = headerElement.textContent;
    const newItem = composeItem({ title });
    targetItem.after(newItem)
}

renderList();
bindAddItemListener();