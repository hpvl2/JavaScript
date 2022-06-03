import { multTable } from "./3-2";

describe("IntSum", () => {
  const logSpy = jest.spyOn(console, "log");

  it("return mult table 7 x 9", () => {
    multTable(7, 9);
    expect(logSpy.mock.calls).toEqual([
      ["7 x 1 = 7"],
      ["7 x 2 = 14"],
      ["7 x 3 = 21"],
      ["7 x 4 = 28"],
      ["7 x 5 = 35"],
      ["7 x 6 = 42"],
      ["7 x 7 = 49"],
      ["7 x 8 = 56"],
      ["7 x 9 = 63"],
    ]);
  });
});
