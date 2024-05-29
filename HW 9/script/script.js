let number = prompt("Введите число:");

if (number >= 0) {
    console.log(`Куб числа ${number} равен ${number * number * number}`);
} else {
    console.log(`Квадрат числа ${number} равен ${number * number}`);
}

let students = prompt("Введите количество учеников в классе:");
let chairs = prompt("Введите количество стульев в кабинете:");

if (chairs >= students) {
    console.log("Стульев хватает");
} else {
    console.log("Стульев не хватает");
}

let users = ['John', 'Bob', 'Tom', 'Nick', 'Sam', 'Alex', 'Jack'];

console.log(users);


console.log(users[users.length - 2]);

users.shift();
console.log(users);

users.push('Landon');
console.log(users);

users[3] = 'Den';
console.log(users);

users.pop();
console.log(users);