import {PurchaseList, Purchase} from './lib.js';

const formEl = document.querySelector('#purchase-form');
const nameEl = document.querySelector('#purchase-name');
const listEl = document.querySelector('#purchase-list');

const purchaseList = new PurchaseList();

formEl.addEventListener('submit', function(evt) {
    // есть на некоторые события default'ое поведение
    // click на ссылку переход
    // при отправке формы - "страница перезагружает" (форма отправляется на сервер)
    evt.preventDefault(); // просим браузер, не делать то, что он делает по умолчанию

    const name = nameEl.value;
    // TODO: валидация

    const purchase = new Purchase(name);
    purchaseList.add(purchase);

    nameEl.value = ''; // очистка формы

    // создали элемент
    const liEl = document.createElement('li');
    // подставили textContent
    liEl.textContent = purchase.name;
    // console.log(liEl.parentElement);
    // пока у элемента нет родителя, он нигде не отображается
    liEl.className = 'list-group-item';

    //const removeEl = document.createElement('button');
    //removeEl.className = 'btn btn-danger btn-sm float-right';
    //removeEl.textContent = 'Remove';

   // removeEl.addEventListener('click', function(evt) {
    //    liEl.remove(); // не везде работает
    //    taskList.remove(task);
    //});

    // Самая трудоёмкая часть синхронизация между DOM и памятью

    //liEl.appendChild(removeEl);
    listEl.appendChild(liEl);
});