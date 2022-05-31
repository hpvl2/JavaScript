import { avgOdd } from "./3-3";

let origAlert;

beforeEach(() => {
  origAlert = window.alert;
  console.log = jest.fn();
});

afterEach(() => {
  window.alert = origAlert;
});

describe("avgOdd", () => {
  it("return odd avg for 0 to 10", () => {
    jest.spyOn(window, "prompt").mockReturnValue(10);
    avgOdd(10);
    expect(console.log).toHaveBeenCalledWith(5);
  });
});
