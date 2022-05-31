/*
  Вывести в консоль таблицу умножения на 7
*/

export function multTable(a, b) {
  for (let i = 1; i <= b; i++) {
    console.log(`${a} x ${i} = ${a * i}`);
  }
}
