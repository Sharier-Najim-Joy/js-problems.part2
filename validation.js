function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'please provide a number';
    }
    const total = num1 + num2;
    return total;
}
const output = add(10, 10);
// console.log(output);

function nam(first, second) {
    if (typeof first !== 'string') {
        return 'please put first name a string'
    }
    else if (typeof second !== 'string') {
        return 'please put second name a string'
    }
    const fullName = first + ' ' + second;
    return fullName;
}
const fullName = nam('najim', 'joy');
// console.log(fullName);

function getSecond(numbers) {
    if(Array.isArray(numbers)===false){
        return 'please provide an array';
    }
    const find =numbers[2];
    return find;
}
const second = getSecond([24, 34, 245]);
// const second = getSecond(12);
console.log(second);