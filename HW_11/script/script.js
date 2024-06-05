console.log("1.");
let menu = {
    width: 200, 
    height: 300,
    title: "my menu"
};

for (let key in menu) {
    if (typeof menu[key] === 'number') {
        menu[key] *= 2;
    }
}

console.log(menu);

console.log("2.");
let arr = [
    {
        id: 1,
        title: "bicycle",
        price: 45000,
        discount: 10
    },
    {
        id: 2,
        title: "roller-skates",
        price: 15000,
        discount: 5
    },
    {
        id: 3,
        title: "Kick scooter",
        price: 10000,
        discount: 30
    },
    {
        id: 4,
        title: "skis",
        price: 25000,
        discount: 20
    },
    {
        id: 5,
        title: "skate",
        price: 10000,
        discount: 0
    }
];


console.log("2.1.");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].title);
}

console.log("2.2");
for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i].title} (${arr[i].price})`);
}

console.log("2.3");
for (let i = 0; i < arr.length; i++) {
    let discountedPrice = arr[i].price - (arr[i].price * arr[i].discount / 100);
    console.log(`${arr[i].title} (${discountedPrice})`);
}