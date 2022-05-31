export function circle() {
  const radius = Number(prompt("Введите R: "));
  const c = 2 * Math.PI * radius;
  const s = Math.PI * radius ** 2;

  return [c.toFixed(1), s.toFixed(1)];
}
