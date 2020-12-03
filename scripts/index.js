const TODO_LIST = [
    { title: 'Съесть печеньку 🍪' },
    { title: 'Изучить React ⚛️' },
    { title: 'Полить цветы 🌸' },
    { title: 'Сделать свой сайт 👨‍💻' },
    { title: 'Погулять в парке 🌳' },
];

function renderList() {
    const listContainerElement = document.querySelector('.todo__list');
    let listHTML = '';

    listHTML = TODO_LIST.map(item => {
        return `<li class="todo__item card">
                <h2 class="card__title">${item.title}</h2>
                <div class="card__actions">
                  <button type="button" class="button button_duplicate"></button>
                  <button type="button" class="button button_remove"></button>
                </div>
              </li>`
    }).join('');

    listContainerElement.insertAdjacentHTML('afterbegin', listHTML)

}

renderList();