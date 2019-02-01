export class Purchase{
    constructor(name, price, categorie) {
        this.name = name;
        this.categorie = categorie;
        this.price = price;
        //this.result = this.result()
    }}

//}
//const purchases {
//    new Purchase("еда", "3000", "продукты");
//    new Purchase("лекарства", "4000", "здоров");
//
//
//}

    export class PurchaseList { // несмотря на то, что будет только один
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item); // в конец
    }



    result = PurchaseList
        .filter(
            ({categorie}) => categorie === 'авто'
        )
        .reduce(
            (acc, {price}) => acc + price, 0 // 0 - initial value
        );
    //console.log(purchases);
    //console.log(result);

// из набора элементов делает один элемент (не обязательно такой же)
// reduce

     reduce(array, callback, accumulator = 0) {
        for (const currentValue of array) {
            accumulator = callback(accumulator, currentValue);
        }
        return accumulator;
    }



    //let result = PurchasesList[0]; // берём первую
//
    //for (const purchase of purchaseList) {
    //    if (result.price < purchase.price) { // оценка, которую я выбрал - хуже, чем та, которую я смотрю, то беру ту, которую смотрю
    //        result = purchase; // заменяю значение в result на новое
    //    }
   // }
//
    //return result;
}