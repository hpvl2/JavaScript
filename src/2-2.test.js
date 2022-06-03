import { numberOfMonth } from "./2-2";

const logSpy = jest.spyOn(console, "log");

let origAlert;

beforeEach(() => {
  origAlert = window.alert;
});

afterEach(() => {
  window.alert = origAlert;
});

describe("send numbers and returning the month", () => {
  it("send 3, return март", () => {
    jest.spyOn(window, "prompt").mockReturnValue(3);
    numberOfMonth(3);
    expect(logSpy).toHaveBeenCalledWith("март");
  });

  it("send 1, return январь", () => {
    jest.spyOn(window, "prompt").mockReturnValue(1);
    numberOfMonth(1);
    expect(logSpy).toHaveBeenCalledWith("январь");
  });

  it("send 0, return error", () => {
    jest.spyOn(window, "prompt").mockReturnValue(0);
    numberOfMonth(0);
    expect(logSpy).toHaveBeenCalledWith("Число не от 1 до 12!");
  });
});
