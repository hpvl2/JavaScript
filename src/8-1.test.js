import { dayOfWeek } from "./8-1";

let origAlert;

beforeEach(() => {
  origAlert = window.alert;
});

afterEach(() => {
  window.alert = origAlert;
});

describe("dayOfWeek", () => {
  it("return day of week", () => {
    jest.spyOn(window, "prompt").mockReturnValue("15.02.1990");
    expect(dayOfWeek()).toBe("Thursday");
  });
});
