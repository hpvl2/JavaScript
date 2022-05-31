/* В двух переменных хранятся даты рождения двух
пользователей в формате ДД.ММ.ГГГГ. Написать
программу, которая определяет более молодого
пользователя.
*/

const user1 = { name: "Alex", birthDay: "12.03.1992" };
const user2 = { name: "Igor", birthDay: "02.05.1989" };

export function youngUser(...data) {
  data.map((item) => {
    const [dd, mm, yy] = item.birthDay.split(".");
    item.birthDayFrm = new Date(yy, mm, dd);
    return item;
  });

  data.sort((a, b) => a.birthDayFrm - b.birthDayFrm).reverse();
  return data[0].name;
}
