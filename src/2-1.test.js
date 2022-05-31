import { max } from "./2-1";

const cLog = console.log();

beforeEach(() => {
  console.log = jest.fn();
});

afterAll(() => {
  console.log = cLog;
});

describe("return the largest number", () => {
  it("return 25", () => {
    max(-5, 25);
    expect(console.log).toHaveBeenCalledWith(25);
  });

  it("return 3", () => {
    max(3, -10);
    expect(console.log).toHaveBeenCalledWith(3);
  });

  it("return 1024", () => {
    max(1024, -2048);
    expect(console.log).toHaveBeenCalledWith(1024);
  });
});
