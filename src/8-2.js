/*
2.Написать программу, которая выводит в консоль
количество минут, прошедшее с начала сегодняшнего
дня. 
*/

export function countMin() {
  const currDate = new Date();

  const hrs = currDate.getHours();
  const mins = currDate.getMinutes();

  console.log(`Прошло: ${hrs * 60 + mins} мин`);
}
