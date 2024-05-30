console.log("Есть массив из чисел: -3, 16, 8, -34, 65, 120, 42, 15, 7, -4, -7, 3, 46, 26, 83");

let numbers = [-3, 16, 8, -34, 65, 120, 42, 15, 7, -4, -7, 3, 46, 26, 83];

let positivenumbers = [];

console.log("Задание 1: Вывести все однозначные положительные числа в возрастающем порядке.");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] < 10) {
        positivenumbers.push(numbers[i]);
    }
}
positivenumbers.sort((a, b) => a - b);

console.log(positivenumbers);

console.log("Задание 2: Вывести те числа из массива, которые больше или равны 15.");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 15) {
        console.log(numbers[i]);
    }
}

console.log("Задание 3: Вывести только нечетные числа массива.");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        console.log(numbers[i]);
    }
}


console.log("Задание 4: Вывести только те значения массива, индекс которых кратен трем.");
for (let i = 0; i < numbers.length; i++) {
    if (i % 3 === 0) {
        console.log(numbers[i]);
    }
}

console.log("Задание 5: Найти сумму нечетных чисел массива и вывести в консоль. ");

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        sum += numbers[i];
    }
}
console.log(+ sum);


console.log("Задание 6: Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.");

let суммаЧетных = 0; 
let суммаНечетных = 0; 

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        суммаЧетных += numbers[i];
    } else {
        суммаНечетных += numbers[i];
    }
}

let разница;
if (суммаЧетных > суммаНечетных) {
    разница = суммаЧетных - суммаНечетных;
} else {
    разница = суммаНечетных - суммаЧетных;
}

console.log("Сумма четных чисел: " + суммаЧетных);
console.log("Сумма нечетных чисел: " + суммаНечетных);
console.log("Разница между суммами: " + разница);


