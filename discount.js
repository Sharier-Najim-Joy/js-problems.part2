function productOffer (product){
    if(product<=100){
        const totalProduct = product * 100;
        return totalProduct;
    }
    else if (product <= 200){
        const totalProduct = product * 90;
        return totalProduct;
    }
    else{
        const totalProduct = product * 70;
        return totalProduct
    }
}
const total1 = productOffer(90);
const total2 = productOffer(110);
const total3 = productOffer(230);
console.log(total1,total2,total3);