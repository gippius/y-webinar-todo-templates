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
    let newHTML = '';

    newHTML = TODO_LIST.map(composeItemHTML).join('');

    listContainerElement.insertAdjacentHTML('afterbegin', newHTML);
}

function composeItemHTML(item) {
    return `<li class="todo__item card">
                    <h2 class="card__title">${item.title}</h2>
                    <div class="card__actions">
                        <button type="button" class="button button_duplicate"></button>
                        <button type="button" class="button button_remove"></button>
                    </div>
                </li>`
}

function bindAddItemListener() {
    const addButtonElement = document.querySelector('.button_add');
    addButtonElement.addEventListener('click', addNewItem)
}

function addNewItem(){
        const inputText = inputElement.value;
        const newItemHTML = composeItemHTML({ title: inputText })
        listContainerElement.insertAdjacentHTML('afterbegin', newItemHTML);
}

renderList();
bindAddItemListener();