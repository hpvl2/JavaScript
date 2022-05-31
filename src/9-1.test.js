import { isRightTriangle } from "./9-1";

describe("isRightTriangle", () => {
  it("return Треугольник прямоугольный", () => {
    expect(isRightTriangle(3, 4, 5)).toBe("Треугольник прямоугольный");
  });
  it("return Треугольник не прямоугольный", () => {
    expect(isRightTriangle(5, 8, 12)).toBe("Треугольник не прямоугольный");
  });
});
