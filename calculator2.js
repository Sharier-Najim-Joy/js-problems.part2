function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
    // return num1+num2; shorthand
}
function subtract(num1, num2) {
    const sum = num1 - num2;
    return sum;
}
function multiply(num1, num2) {
    const sum = num1 * num2;
    return sum;
}
function divided(num1, num2) {
    const sum = num1 / num2;
    return sum;
}
function calculator(a, b, oparetor) {
    if (oparetor === '+' ) {
        const total = add(a, b);
        return total;
    }
    else if (oparetor === '-') {
        const total = subtract(a, b);
        return total;
    }
    else if (oparetor === '*') {
        const total = multiply(a, b);
        return total;
    }
    else if (oparetor === '/') {
        const total = divided(a, b);
        return total;
    }
    else {
        return "'Error' 'only +,-,*,/ are add'"
    }
}
const calculatorInput = calculator(2, 4, '+');
console.log(calculatorInput);