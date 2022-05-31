export function quadratic(a, b, c) {
  const roots = [];

  const d = b * b - 4 * a * c;

  if (d > 0) {
    const x1 = (Math.sqrt(d) - b) / (2 * a);
    const x2 = (-Math.sqrt(d) - b) / (2 * a);
    roots.push(x1.toFixed(2));
    roots.push(x2.toFixed(2));
  }

  if (d === 0) {
    const x = (Math.sqrt(d) - b) / (2 * a);
    roots.push(x.toFixed(2));
  }
  return roots;
}
