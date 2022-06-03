import { max } from "./2-1";

const logSpy = jest.spyOn(console, "log");

describe("return the largest number", () => {
  it("return 25", () => {
    max(-5, 25);
    expect(logSpy).toHaveBeenCalledWith(25);
  });

  it("return 3", () => {
    max(3, -10);
    expect(logSpy).toHaveBeenCalledWith(3);
  });

  it("return 1024", () => {
    max(1024, -2048);
    expect(logSpy).toHaveBeenCalledWith(1024);
  });
});
