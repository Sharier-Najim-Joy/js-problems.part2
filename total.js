const productItem = [
    { name: 'pant', price: 800 },
    { name: 'shirt', price: 500 },
    { name: 'shoes', price: 1100 },
    { name: 'underwear', price: 200 },
]

function shopping(products) {
    let total = 0;
    for (const product of products) {
        total = total + product.price;
    }
    return total;
}
const x = shopping(productItem);
console.log(x);