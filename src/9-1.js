export function isRightTriangle(a, b, c) {
  const arr = [a, b, c].sort((m, n) => m - n).map((el) => el ** 2);
  const [first, second, third] = arr;
  return third === first + second
    ? "Треугольник прямоугольный"
    : "Треугольник не прямоугольный";
}
