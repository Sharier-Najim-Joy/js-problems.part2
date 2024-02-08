const smallestNumber = [56,58,59,78,10,79,80,45,34];

function smallest (numbers){
    let store = numbers[0];
    for(const number of numbers){
        if (number < store){
            store = number
        }
    }
    return store;
}

const output = smallest(smallestNumber);
console.log(output);