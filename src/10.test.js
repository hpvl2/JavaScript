import { isDate, isEmail, isPhone } from "./10.js";

describe("test isDate, isEmail, isPhone", () => {
  it("return valid date for '19.03.1985'", () => {
    expect(isDate("19.03.1985")).toBe("valid date");
  });

  it("return valid email for 'helloworld@ya.ru'", () => {
    expect(isEmail("helloworld@ya.ru")).toBe("valid email");
  });

  it("return valid phone for 'helloworld@ya.ru'", () => {
    expect(isPhone("79201234567")).toBe("valid phone");
  });
});
