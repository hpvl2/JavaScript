import { diff, isWord, pow } from "./6";

describe("text", () => {
  it("returns the difference between the largest and smallest", () => {
    expect(diff(10, 3)).toBe(7);
  });

  it("return false because 2 words", () => {
    expect(isWord("Hello World")).toBeFalsy();
  });

  it("return 2 ^ 3 = 8", () => {
    expect(pow(2, 3)).toBe(8);
  });
});
