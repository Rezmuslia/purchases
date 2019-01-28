export class Purchase{
    constructor(name, price) {
        this.name = name;
        this.price = price;
        //this.result = this.result()
    }

}
export class PurchaseList { // несмотря на то, что будет только один
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item); // в конец
    }
}

export function findMostExpensive(purchaseList) {
    let result = PurchasesList[0]; // берём первую

    for (const purchase of purchaseList) {
        if (result.price < purchase.price) { // оценка, которую я выбрал - хуже, чем та, которую я смотрю, то беру ту, которую смотрю
            result = purchase; // заменяю значение в result на новое
        }
    }

    return result;
}