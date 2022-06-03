import { strLength } from "./1-2";

const logSpy = jest.spyOn(console, "log");

describe("return the total number of characters", () => {
  it("return 10 characters", () => {
    strLength("Hello", "World");
    expect(logSpy).toHaveBeenCalledWith(10);
  });

  it("return 9 characters", () => {
    strLength("John", "Smith");
    expect(logSpy).toHaveBeenCalledWith(9);
  });

  it("return 8 characters", () => {
    strLength("str1", "str2");
    expect(logSpy).toHaveBeenCalledWith(8);
  });
});
