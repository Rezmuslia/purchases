export class Purchase {
    constructor(name, categorie, price) {
        this.name = name;
        this.categorie = categorie;
        this.price = price;
    }
}

const purchases = [
    new Purchase('заправка', 'авто', 2000),
    new Purchase('еда', 'еда', 1000),
    new Purchase('заправка', 'авто', 2000),
];

export class PurchaseList {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item); // в конец
    }

    max() {

        if (this.items.length === 0) {
            return null;
        }

        let currentMax = this.items[0];

        for (const item of this.items) {
            if (currentMax.price < item.price) {
                currentMax = item;
            }
        }

        return currentMax;
    }
}


//function reduce(array, callback, accumulator = 0) {
//   for (const currentValue of array) {
//       this.accumulator = callback(accumulator, currentValue);
//   }
//   return accumulator;}


//let result = PurchasesList[0]; // берём первую
//
//for (const purchase of purchaseList) {
//    if (result.price < purchase.price) { // оценка, которую я выбрал - хуже, чем та, которую я смотрю, то беру ту, которую смотрю
//        result = purchase; // заменяю значение в result на новое
//    }
// }
//
//return result;
