import { intSum } from "./3-1";

describe("IntSum", () => {
  const logSpy = jest.spyOn(console, "log");

  it("returns from a to b int sum", () => {
    intSum(50, 100);
    expect(logSpy).toHaveBeenCalledWith(3825);
  });
});
