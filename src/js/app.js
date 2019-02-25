import {PurchaseList, Purchase} from './lib.js';

const formEl = document.querySelector('#purchase-form');
const formE2 = document.querySelector('#purchase-form2');
const nameEl = document.querySelector('#purchase-name');
const categorieEl = document.querySelector('#purchase-categorie');
const priceEl = document.querySelector('#purchase-price');
const listEl = document.querySelector('#purchase-list');
const listEl2 = document.querySelector('#purchase-list2');
//const filterEl = document.querySelector('#filter-list');
const maxPurchaseEl = document.querySelector('#max-list');

const purchaseList = new PurchaseList();
//const filterList = new FilterList();

formEl.addEventListener('submit', function (evt) {
    // есть на некоторые события default'ое поведение
    // click на ссылку переход
    // при отправке формы - "страница перезагружает" (форма отправляется на сервер)
    evt.preventDefault(); // просим браузер, не делать то, что он делает по умолчанию


    const name = nameEl.value;
    const categorie = categorieEl.value;
    const price = priceEl.value;
    // TODO: валидация

    const purchase = new Purchase(name, categorie, price);
    purchaseList.add(purchase);

    console.log(purchase);
    nameEl.value = '';
    categorieEl.value = '';
    priceEl.value = '';// очистка формы

    // создали элемент
    const liEl = document.createElement('li');
    // подставили textContent
    liEl.textContent = `название: ${purchase.name}, категория: ${purchase.categorie}цена:${purchase.price}`;
    liEl.className = 'list-group-item';
    //maxPurchaseEl.className = 'max-group-item';


    listEl.appendChild(liEl);

});

formE2.addEventListener('submit', function (evt) {
    // есть на некоторые события default'ое поведение
    // click на ссылку переход
    // при отправке формы - "страница перезагружает" (форма отправляется на сервер)
    evt.preventDefault(); // просим браузер, не делать то, что он делает по умолчанию

    const max = purchaseList.max();

    if (max !== null) {
        // TODO: update DOM
        console.log(max.name);
        console.log(max.price);
        maxPurchaseEl.textContent = `название: ${max.name}, категория: ${max.categorie}цена:${max.price}`;
        maxPurchaseEl.className = 'list-group-item';
        // maxPurchaseEl.className = 'max-group-item';

    }
    listEl2.appendChild(maxPurchaseEl);

});


