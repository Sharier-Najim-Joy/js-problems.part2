const height = [56,58,59,78,79,80,45,34,90];

function findHeight (numbers){
// that let max three line are same
    // let max =0;
    // let max = numbers[0];
    let max = [];
for(const number of numbers){
    if(number > max){
        max = number;
    }
}
return max;
}
const output = findHeight(height);
console.log(output);