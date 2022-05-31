import { strLength } from "./1-2";

const cLog = console.log();

beforeEach(() => {
  console.log = jest.fn();
});

afterAll(() => {
  console.log = cLog;
});

describe("return the total number of characters", () => {
  it("return 10 characters", () => {
    strLength("Hello", "World");
    expect(console.log).toHaveBeenCalledWith(10);
  });

  it("return 9 characters", () => {
    strLength("John", "Smith");
    expect(console.log).toHaveBeenCalledWith(9);
  });

  it("return 8 characters", () => {
    strLength("str1", "str2");
    expect(console.log).toHaveBeenCalledWith(8);
  });
});
