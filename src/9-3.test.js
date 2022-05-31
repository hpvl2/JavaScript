import { quadratic } from "./9-3";

describe("quadratic", () => {
  it("return 6 and -8 for x^2+2x-48=0", () => {
    const expected = ["6.00", "-8.00"];
    expect(quadratic(1, 2, -48)).toStrictEqual(expected);
  });
});
