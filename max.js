const i = Math.max(12,13,123,133,13);
// console.log(i);

const tim = 78;
const kim = 88;
const jim = 98;
if (tim > kim && tim > jim){
    // console.log('tim boss');
}
else if (kim > tim && kim > jim){
    // console.log('kim boss');
}
else{
    // console.log('jim boss');
}

function number (tim,kim,jim){
    if (tim > kim && tim > jim){
        return tim;
    }
    else if (kim > tim && kim > jim){
        return kim;
    }
    else{
        return jim;
    }
     
}
const hightNumber =number(78,98,88);
console.log(hightNumber);