class ShoppingCart {
    constructor() {
        this.items = []
    }
    addItem = (name, quantity, pricePerUnit) =>
        this.items.push({ name, quantity, pricePerUnit })
    getItems = () =>
        this.items
    clear = () =>
        this.items = []
    total = () =>
        this.items.reduce((result, item) => result + item.quantity * item.pricePerUnit, 0)
}

module.exports = ShoppingCart