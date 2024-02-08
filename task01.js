// 04
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Op", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(items) {
    let sum = 0;
    for (const item of items) {
        sum = sum + item.price
    }
    return sum;
}
const priceTotal = findAveragePhonePrice(phones);
// console.log(priceTotal);


// another find smallest brand name 
function smallBrandName(companys) {
    let store = companys[0].brand;
    console.log(store);
    for (const company of companys) {
        if(company.brand.length < store.length){
            store = company.brand;
        }
        
    }
    return store
}
const smallName = smallBrandName(phones);
console.log(smallName);