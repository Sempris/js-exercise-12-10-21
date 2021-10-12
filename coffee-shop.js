// 3. Coffee Shop App
//     Write a class called CoffeeShop, which has three instance variables:

//         1. name : a string (basically, of the shop)
//         2. menu : an array of items (of object type), with each item containing the item (name of the item), type (whether food or a drink) and price.
//         3. orders : an empty array

//     and seven methods:

//     1. addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise, return "This item is currently unavailable!"
//     2. fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
//     3. listOrders: returns the list of orders taken, otherwise, an empty array.
//     4. dueAmount: returns the total amount due for the orders taken.
//     5. cheapestItem: returns the name of the cheapest item on the menu.
//     6. drinksOnly: returns only the item names of type drink from the menu.
//     7. foodOnly: returns only the item names of type food from the menu.

//     IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.
//     NOTES:  Round off due amount up to two decimal places.

//     Use these mock data:
//         let shopName = "Tesha's coffee shop";
//         let menu = [
//             {item: 'orange juice', type: 'drink' , price: 1.50 },
//             {item: 'lemonade', type: 'drink' , price: 1.25 },
//             {item: 'cranberry juice', type: 'drink' , price: 1.75 },
//             {item: 'pineapple juice', type: 'drink' , price: 2.50 },
//             {item: 'lemon iced tea', type: 'drink' , price: 1.50 },
//             {item: 'vanilla chai latte', type: 'drink' , price: 3.50 },
//             {item: 'hot chocolate', type: 'drink' , price: 3.00 },
//             {item: 'iced coffee', type: 'drink' , price: 1.75 },
//             {item: 'tuna sandwich', type: 'food' , price: 3.75 },
//             {item: 'ham and cheese sandwich', type: 'food' , price: 4.00 },
//             {item: 'bacon and egg', type: 'food' , price: 4.25 },
//             {item: 'hamburger', type: 'food' , price: 5.25 },
//             {item: 'cinnamon roll', type: 'food' , price: 4.75 },
//         ]
//         let orders = [];

//     Examples:
//     // create new instance object    
//     let tcs = new CoffeeShop(shopName, menu, orders);

//     tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
//     // Tesha's coffee shop does not sell hot cocoa
//     tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
//     // specifying the variant of "iced tea" will help the process

//     tcs.addOrder("cinnamon roll") ➞  "Order added!"
//     tcs.addOrder("iced coffee") ➞ "Order added!"
//     tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
//     // the list of all the items in the current order

//     tcs.dueAmount() ➞ 6.50

//     tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
//     tcs.fulfillOrder() ➞ "The iced coffee is ready!"
//     tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
//     // all orders have been presumably served

//     tcs.listOrders() ➞ []
//     // an empty array is returned if all orders have been exhausted

//     tcs.dueAmount() ➞ 0.0
//     // no new orders taken, expect a zero payable

//     tcs.cheapestItem() ➞ "lemonade"
//     tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
//     tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]

class CoffeeShop {
    constructor(name, menu, orders) {
        this.name = name
        this.menu = menu
        this.orders = orders
    }

    shopName = () => this.name

    addOrder = (item) => {
        if (this.menu.filter(m => m.item == item).length) {
            this.orders.push(item)
            return "Order added!"
        }
        return "This item is currently unavailable!"
    }

    fulfillOrder = () => this.orders.length ? `The ${this.orders.shift()} is ready!` : "All orders have been fulfilled!"

    listOrders = () => this.orders

    dueAmount = () => +this.orders.reduce((t, x) => t + this.menu.filter(m => m.item == x)[0].price, 0).toFixed(2)

    cheapestItem = () => this.menu.reduce(([n, p], x) => x.price < p ? [x.item, x.price] : [n, p], ["", 100.0])[0]

    drinksOnly = () => this.menu.filter(m => m.type == "drink").map(n => n.item)

    foodOnly = () => this.menu.filter(m => m.type == "food").map(n => n.item)
}

let shopName = "Tesha's coffee shop";
let menu = [
    { item: 'orange juice', type: 'drink', price: 1.50 },
    { item: 'lemonade', type: 'drink', price: 1.25 },
    { item: 'cranberry juice', type: 'drink', price: 1.75 },
    { item: 'pineapple juice', type: 'drink', price: 2.50 },
    { item: 'lemon iced tea', type: 'drink', price: 1.50 },
    { item: 'vanilla chai latte', type: 'drink', price: 3.50 },
    { item: 'hot chocolate', type: 'drink', price: 3.00 },
    { item: 'iced coffee', type: 'drink', price: 1.75 },
    { item: 'tuna sandwich', type: 'food', price: 3.75 },
    { item: 'ham and cheese sandwich', type: 'food', price: 4.00 },
    { item: 'bacon and egg', type: 'food', price: 4.25 },
    { item: 'hamburger', type: 'food', price: 5.25 },
    { item: 'cinnamon roll', type: 'food', price: 4.75 },
]
let orders = [];


let tcs = new CoffeeShop(shopName, menu, orders);

console.log(tcs.addOrder("hot cocoa"));
console.log(tcs.addOrder("iced tea"));
console.log(tcs.addOrder("cinnamon roll"));
console.log(tcs.addOrder("iced coffee"));
console.log(tcs.listOrders());
console.log(tcs.dueAmount());
console.log(tcs.fulfillOrder());
console.log(tcs.fulfillOrder());
console.log(tcs.fulfillOrder());
console.log(tcs.listOrders());
console.log(tcs.dueAmount());
console.log(tcs.cheapestItem());
console.log(tcs.drinksOnly());
console.log(tcs.foodOnly());