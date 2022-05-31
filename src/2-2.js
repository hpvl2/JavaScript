/* 
Запросить у пользователя ввод числа от 1 до 12.
Вывести в консоль название месяца, соответствующее
этому числу (1 — январь, 2 — февраль и т.д.).
*/
export function numberOfMonth(number) {
  Number(prompt("Enter number of month", number));

  if (number > 0 && number < 13) {
    switch (number) {
      case 1:
        console.log("январь");
        break;
      case 2:
        console.log("февраль");
        break;
      case 3:
        console.log("март");
        break;
      case 4:
        console.log("апрель");
        break;
      case 5:
        console.log("май");
        break;
      case 6:
        console.log("июнь");
        break;
      case 7:
        console.log("июль");
        break;
      case 8:
        console.log("август");
        break;
      case 9:
        console.log("сентябрь");
        break;
      case 10:
        console.log("октябрь");
        break;
      case 11:
        console.log("ноябрь");
        break;
      case 12:
        console.log("декабрь");
        break;
    }
  } else console.log("Число не от 1 до 12!");
}
