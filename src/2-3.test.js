import { CircleInSquare } from "./2-3";

const logSpy = jest.spyOn(console, "log");

describe("can a circle fit in a square", () => {
  it("return a circle won't fit in a square", () => {
    CircleInSquare(10, 10);
    expect(logSpy).toHaveBeenCalledWith("круг не поместится в квадрат");
  });
});
