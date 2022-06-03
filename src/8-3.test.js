import { youngUser } from "./8-3";

describe("youngUser", () => {
  it("return the youngest user", () => {
    const user1 = new Date("1990-10-01");
    const user2 = new Date("1989-10-01");

    expect(youngUser(user1, user2)).toBe("молодой user1");
  });
});
