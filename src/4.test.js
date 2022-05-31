import { createObjAdmin } from "./4";

describe("createObjAdmin", () => {
  it("it's a function", () => {
    expect(createObjAdmin).toBeInstanceOf(Function);
  });

  it("age: 21 and return admin data", () => {
    jest.spyOn(window, "prompt").mockReturnValue(21);
    expect(createObjAdmin()).toBe("user: John, age: 21, role: admin");
  });
});
