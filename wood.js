function shopingQuantity (shirtQuantity,pantQuantity,shoeQuantity){
    const shirtPrice = 500;
    const pantPrice = 600;
    const shoePrice = 800;

    const totalShirt = shirtQuantity * shirtPrice;
    const totalPant = pantQuantity * pantPrice;
    const totalShoe = shoeQuantity * shoePrice;

    const totalPrice = totalShirt + totalPant + totalShoe;
    return totalPrice;
}
const price = shopingQuantity(2,2,1)
console.log(price);