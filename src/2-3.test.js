import { CircleInSquare } from "./2-3";

const cLog = console.log();

beforeEach(() => {
  console.log = jest.fn();
});

afterAll(() => {
  console.log = cLog;
});

describe("can a circle fit in a square", () => {
  it("return a circle won't fit in a square", () => {
    CircleInSquare(10, 10);
    expect(console.log).toHaveBeenCalledWith("круг не поместится в квадрат");
  });
});
