import {PurchaseList, Purchase,} from './lib.js';

const formEl = document.querySelector('#purchase-form');
const nameEl = document.querySelector('#purchase-name');
const categorieEl = document.querySelector('#purchase-categorie');
const priceEl = document.querySelector('#purchase-price');
const listEl = document.querySelector('#purchase-list');

const purchaseList = new PurchaseList();

formEl.addEventListener('submit', function(evt) {
    // есть на некоторые события default'ое поведение
    // click на ссылку переход
    // при отправке формы - "страница перезагружает" (форма отправляется на сервер)
    evt.preventDefault(); // просим браузер, не делать то, что он делает по умолчанию

    const name = nameEl.value;
    const categorie = categorieEl.value;
    const price = priceEl.value;
    // TODO: валидация

    const purchase = new Purchase(name);
    purchaseList.add(purchase);

    //console.log(purchase);

    nameEl.value = '';
    categorieEl.value = '';
   priceEl.value = '';// очистка формы

    // создали элемент
    const liEl = document.createElement('li');

    // подставили textContent
    liEl.textContent = `название: ${purchase.name}, категория: ${purchase.categorie}цена:${purchase.price}`;

   liEl.className = 'list-group-item';



    // const removeEl = document.createElement('button');
    // removeEl.className = 'btn btn-danger btn-sm float-right';
    // removeEl.textContent = 'Remove';

   // removeEl.addEventListener('click', function(evt) {
    //     liEl.remove(); // не везде работает
    //    taskList.remove(task);
    //});

    // Самая трудоёмкая часть синхронизация между DOM и памятью

    //liEl.appendChild(removeEl);
    listEl.appendChild(liEl);

 });
