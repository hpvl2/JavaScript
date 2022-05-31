import { funcMultSum } from "./1-1";

describe("return mult and sum", () => {
  const cLog = console.log();

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = cLog;
  });

  it("return mult = 2, sum = 3", () => {
    funcMultSum(1, 2);
    expect(console.log).toHaveBeenCalledWith("2, 3");
  });

  it("return mult = 30 sum = 11 ", () => {
    funcMultSum(5, 6);
    expect(console.log).toHaveBeenCalledWith("30, 11");
  });

  it("return mult = 80 sum = 18 ", () => {
    funcMultSum(8, 10);
    expect(console.log).toHaveBeenCalledWith("80, 18");
  });

  it("return mult = 132 sum = 23 ", () => {
    funcMultSum(11, 12);
    expect(console.log).toHaveBeenCalledWith("132, 23");
  });
});
