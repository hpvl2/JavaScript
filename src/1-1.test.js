import { funcMultSum } from "./1-1";

describe("return mult and sum", () => {
  const logSpy = jest.spyOn(console, "log");

  it("return mult = 2, sum = 3", () => {
    funcMultSum(1, 2);
    expect(logSpy).toHaveBeenCalledWith("2, 3");
  });

  it("return mult = 30 sum = 11 ", () => {
    funcMultSum(5, 6);
    expect(logSpy).toHaveBeenCalledWith("30, 11");
  });

  it("return mult = 80 sum = 18 ", () => {
    funcMultSum(8, 10);
    expect(logSpy).toHaveBeenCalledWith("80, 18");
  });

  it("return mult = 132 sum = 23 ", () => {
    funcMultSum(11, 12);
    expect(logSpy).toHaveBeenCalledWith("132, 23");
  });
});
