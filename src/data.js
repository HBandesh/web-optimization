const faker = require('faker');

export const getProducts = () =>{
    let products = [];
    for(let index = 0; index < 1000; index++) {
        if(index <= 200) {
            let temp = {
                imageUrl: faker.image.image(),
                department: faker.commerce.department(),
                productName: faker.commerce.productName(),
                price: faker.commerce.price(),
            };
            products.push(temp);
        }
    }
    return products;
}

export const getPdpProduct = () => {
    let product = {}
    for(let index= 0; index < 1000; index++) {
        product = {
            imageUrl: faker.image.image(),
            department: faker.commerce.department(),
            productName: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
        }
    }
    return product;
}

export const navigationMenu = [{
    value: "Girl",
    children: ["School Uniform", "Graphic Tees", "Jeans", "Leggings", "Bottom", "Shorts", "Jackets"]
}, {
    value: "Toddler Girls",
    children: ["School Uniform", "Graphic Tees", "Jeans", "Leggings", "Bottom", "Shorts", "Jackets"]
}, {
    value: "Boys",
    children: ["School Uniform", "Graphic Tees", "Jeans", "Leggings", "Bottom", "Shorts", "Jackets"]
}, {
    value: "Toddler Boys",
    children: ["School Uniform", "Graphic Tees", "Jeans", "Leggings", "Bottom", "Shorts", "Jackets"]
}, {
    value: "Shoes",
    children: ["School Uniform", "Graphic Tees", "Jeans", "Leggings", "Bottom", "Shorts", "Jackets"]
}, {
    value: "Accessories",
    children: ["School Uniform", "Graphic Tees", "Jeans", "Leggings", "Bottom", "Shorts", "Jackets"]
}];