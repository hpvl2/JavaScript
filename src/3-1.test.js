import { intSum } from "./3-1";

describe("IntSum", () => {
  const log = console.log;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = log;
  });

  it("returns from a to b int sum", () => {
    intSum(50, 100);
    expect(console.log).toHaveBeenCalledWith(3825);
  });
});
