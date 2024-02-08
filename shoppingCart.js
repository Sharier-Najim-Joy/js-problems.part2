const productItem = [
    { name: 'pant', price: 800, quantity: 5 },
    { name: 'shirt', price: 500, quantity: 6 },
    { name: 'shoes', price: 1100, quantity: 2 },
    { name: 'underwear', price: 200, quantity: 34 },
]
function shoppingCart(products) {
    let sum = 0;
    for (const product of products) {
        const priceQuantity = product.price * product.quantity;
        sum = sum + priceQuantity;
    }
    return sum;
}
const ShoppingTotal = shoppingCart(productItem);
console.log(ShoppingTotal);