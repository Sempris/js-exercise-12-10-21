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
