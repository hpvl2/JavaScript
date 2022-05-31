/* 
  Вывести в консоль сумму всех целых чисел от 50 до 100.
 */

export function intSum(a, b) {
  let sum = 0;

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  console.log(sum);
}

intSum(50, 100);
