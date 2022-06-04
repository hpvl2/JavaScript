/* Определить с помощью регулярного выражения, является ли введённая строка:
    1.Датой.
    2.Адресом электронной почты.
    3.*Номером телефона.
*/

export function isDate(str) {
  const regexp = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
  return regexp.test(str) ? "valid date" : "invalid date";
}

export function isEmail(str) {
  const regexp = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;

  return regexp.test(str) ? "valid email" : "invalid email";
}

export function isPhone(str) {
  const regexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  return regexp.test(str) ? "valid phone" : "invalid phone";
}
