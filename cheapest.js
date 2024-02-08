const phonesInformation = [
    { name: 'xoami', price: 30000, color: 'black', camera: '19mp', variante: 'nan' },
    { name: 'oppo', price: 31000, color: 'black', camera: '19mp', variante: 'nan' },
    { name: 'iphone', price: 100000, color: 'black', camera: '19mp', variante: 'nan' },
    { name: 'samsung', price: 38000, color: 'black', camera: '19mp', variante: 'nan' },
    { name: 'waltone', price: 12000, color: 'black', camera: '19mp', variante: 'nan' },
    { name: 'htc', price: 200, color: 'black', camera: '19mp', variante: 'nan' },
]

function getPhone(phones) {
    let cheapestPrice = phones[0];
    for (const phone of phones) {
        if (phone.price < cheapestPrice.price) {
            cheapestPrice = phone;
        }
    }
    return cheapestPrice;
}
const cheapest = getPhone(phonesInformation);
console.log('cheapest phonr:',cheapest);
