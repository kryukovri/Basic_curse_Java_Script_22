// Вывести в консоль заданную строку N раз.

const anyString = " Bla Bla Bla";
const nCount = 10;

for (let i = 0; i < nCount; i += 1) {
  console.log(anyString);
}

// Ежедневно количество доступных автомобилей в салоне уменьшается в два раза. Выяснить, на какой день продаж, количество доступных к покупке авто станет меньше M, если известно, что в первый день продаж всего было N автомобилей.

let N = 50; // Количество автомобилей в первый день продаж
let M = 10; // Количество доступных к покупке авто станет меньше M,
let counter = 0; // день старта продаж

while (M < N) {
  N = N / 2;
  counter += 1;
}
console.log(counter);

// Проанализировав временной промежуток начиная  с 1800 и до 2022 года найти и вывести в консоль:
//  * Год первого полета человека в космос и количество итераций которое потребовалось для поиска.

const yeaOfFlyLune = 1969;
let counter = 0;

for (i = 2022; 1800 < i; i -= 1) {
  if (i === yeaOfFlyLune) {
    break;
  }
  counter += 1;
}
console.log(counter);

//  * Количество високосных годов принадлежащих данному отрезку и количество итераций которое потребовалось для поиска.

let counter = 0;

for (let i = 1800; i < 2022; i += 1) {
  if (i % 4 !== 0) continue;
  counter += 1;
}
console.log(counter);
