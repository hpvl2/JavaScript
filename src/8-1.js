/*
Запросите у пользователя дату в формате
ДД.ММ.ГГГГ. Напишите программу, выводящую день
недели по введённой дате.
*/

export function dayOfWeek() {
  const date = prompt("Enter date: dd.mm.yy");
  const [dd, mm, yy] = date.split(".");
  const frmDate = new Date(yy, mm - 1, dd);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[frmDate.getDay()];
}
