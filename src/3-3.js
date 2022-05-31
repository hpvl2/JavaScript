/*
Запросить у пользователя ввод числа N. Вывести в
консоль среднее арифметическое всех нечётных
чисел от 1 до N
*/

export function avgOdd() {
  const n = prompt("Enter a number");
  const numbers = [];
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i;
      numbers.push(i);
    }
  }

  const result = sum / numbers.length;
  console.log(result);
}
