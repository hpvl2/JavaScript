import { youngUser } from "./8-3";

describe("youngUser", () => {
  it("return the youngest user", () => {
    const user1 = { name: "Alex", birthDay: "12.03.1992" };
    const user2 = { name: "Igor", birthDay: "02.05.1989" };

    expect(youngUser(user1, user2)).toBe("Alex");
  });
});
