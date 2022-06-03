import { arrays } from "./5";

describe("arrays function", () => {
  const logSpy = jest.spyOn(console, "log");

  it("it's a function", () => {
    arrays();
    expect(arrays).toBeInstanceOf(Function);
  });

  it("sum of array elements", () => {
    arrays();
    expect(logSpy).toHaveBeenCalledWith(55);
  });

  it("elements of array x2", () => {
    const expected = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    arrays();
    expect(logSpy).toHaveBeenCalledWith(expected);
  });

  it("return max and min elements of array", () => {
    arrays();
    expect(logSpy).toHaveBeenCalledWith("max: 10, min: 1");
  });
});
