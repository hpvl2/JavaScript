export function createObjAdmin() {
  /* Создайте объект user, содержащий поле name со
значением ‘John’. Запросить у пользователя ввод числа. 
Записать введенное значение в поле age объекта user. */

  const user = {
    name: "John",
  };

  user.age = +prompt("Введите возраст");

  /* Создать копию объекта user с именем admin.
    Добавить новому объекту поле role со значением
    ‘admin’. */

  const admin = { ...user };

  admin.role = "admin";

  /* Записать все значения полей объекта admin в
    отдельные переменные. Имена переменных
    должны совпадать с названиями полей. */

  const { name, age, role } = admin;

  return `user: ${name}, age: ${age}, role: ${role}`;
}
