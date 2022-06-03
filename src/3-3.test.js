import { avgOdd } from "./3-3";

const logSpy = jest.spyOn(console, "log");

let origAlert;

beforeEach(() => {
  origAlert = window.alert;
});

afterEach(() => {
  window.alert = origAlert;
});

describe("avgOdd", () => {
  it("return odd avg for 0 to 10", () => {
    jest.spyOn(window, "prompt").mockReturnValue(10);
    avgOdd(10);
    expect(logSpy).toHaveBeenCalledWith(5);
  });
});
