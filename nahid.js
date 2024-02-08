const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
        { model: "PhoneE", brand: "khalid", price: 105000 },
        { model: "PhoneE", brand: "Ia", price: 105000 },
        { model: "PhoneE", brand: "Ipho", price: 105000 },
    ];

function smallName(phones){
    let brandNames = phones[0].brand;
    for(let i = 0; i<phones.length; i++){
        let element = phones[i];
        let index = element.brand;
        // brandNames.push(index);
        if(index.length < brandNames.length){
            brandNames = index
        }

      };
      return brandNames
    //   let smallestName = brandNames[0];
    //   for(const brandName of brandNames){
    //     if(brandName.length < smallestName.length){
    //         smallestName = brandName;
    //     }
    //   }
    //   return smallestName;
}

const result = smallName(phones);
console.log(result);