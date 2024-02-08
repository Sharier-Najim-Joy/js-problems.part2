// 01
// Find the lowest number in the array below.
function getNumber(numbers) {
    if (Array.isArray(numbers) === false){
        return 'provide an Array'
    }
    let store = numbers[0];
    for (const number of numbers) {
        if (number < store) {
            store = number;
        }
    }
    return store;
}

const lowestNumber = getNumber([167, 190, 120, 165, 117]);
// console.log(lowestNumber);

// 02
// Find the friend with the smallest name.
function getName(names){
    if(Array.isArray(names)===false){
        return 'please provide an Array'
    }
    let store = names[0];
    for(const name of names){
        if(name.length < store.length){
            store = name
        }
    }
    return store;
}

const smallName = getName(['rahim', 'robin', 'rafi', 'ron', 'rashed']);
// console.log(smallName);

// 03
// Your task is to calculate the total budget required to buy electronics:

function calculateElectronicsBudget(laptop, tablet,mobile){
    if(typeof laptop !=='number' || typeof tablet !=='number' || typeof mobile !=='number'){
        return 'please provide a number'
    }
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const laptopTotalPrice = laptop * laptopPrice;
    const tabletTotalPrice = tablet * tabletPrice;
    const mobileTotalPrice = mobile * mobilePrice;

    const allPriceTotal = laptopTotalPrice+tabletTotalPrice+mobileTotalPrice;
    return allPriceTotal;
}
const totalBudget = calculateElectronicsBudget(5,4,8);
console.log(totalBudget);