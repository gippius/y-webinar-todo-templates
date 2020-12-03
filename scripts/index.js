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
        console.log(targetItemElement.closest('.card'))
        targetItemElement.closest('.card').remove();
    })
    
    itemElement.querySelector('.button_duplicate').addEventListener('click', (event)=>{
        const targetElement = event.target;
        const targetItemText = targetElement.closest('.card').querySelector('.card__title').innerText;
        const newItemElement = composeItem({ title: targetItemText })
        listContainerElement.prepend(newItemElement)
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