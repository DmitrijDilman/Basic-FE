let number = prompt("Введите число:");

number = Number(number);

let cube = number ** 3;

console.log(cube);


let number1 = prompt("Введите первое число:");

let number2 = prompt("Введите второе число:");

number1 = Number(number1);
number2 = Number(number2);

let sum = number1 + number2;

console.log("Сумма:", sum);



let username = prompt("Ваше имя:");
let usersurname = prompt("Ваша фамилия:");
let userage = prompt("Ваш возраст:");
let userposition = prompt("Ваша должность:");

userage = parseInt(userage);

let currentYear = new Date().getFullYear();

let yearOfBirth = currentYear - userage;

let message = `Hi, my name is ${username} ${usersurname}. I was born in ${yearOfBirth}. I'm ${userposition}.`;

console.log(message);