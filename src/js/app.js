import {PurchaseList, Purchase,} from './lib.js';

const formEl = document.querySelector('#purchase-form');
const nameEl = document.querySelector('#purchase-name');
const categorieEl = document.querySelector('#purchase-categorie');
const priceEl = document.querySelector('#purchase-price');
const listEl = document.querySelector('#purchase-list');
const filterEl = document.querySelector('#filter-list');

const purchaseList = new PurchaseList();
const filterList = new FilterList();

formEl.addEventListener('submit', function(evt) {
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

        const filteredpurchase = new FilteredPurchase(name, categorie, price);
        filterList.filter(filteredpurchase);

        console.log(purchase);

        nameEl.value = '';
        categorieEl.value = '';
        priceEl.value = '';// очистка формы

        // создали элемент
        const liEl = document.createElement('li');
        const fiEl = document.createElement('fi');

        // подставили textContent
        liEl.textContent = `название: ${purchase.name}, категория: ${purchase.categorie}цена:${purchase.price}`;
        fiEl.textContent = `самая дорогая покупка: ${purchase.name}, категория: ${purchase.categorie}цена:${purchase.price}`;


        liEl.className = 'list-group-item';
        fiEl.className = 'list-group-item';

        const filterEl = document.createElement('button');
        filterEl.className = 'btn btn-danger btn-sm float-right';
        filterEl.textContent = 'Filter';

        filterEl.addEventListener('click', function (evt) {
            fiEl.filter(); // не везде работает
            filterList.filter(purchase);
        });

        // removeEl.addEventListener('click', function(evt) {
        //     liEl.remove(); // не везде работает
        //    taskList.remove(task);
        //});


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


