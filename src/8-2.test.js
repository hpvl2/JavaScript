import { countMin } from "./8-2";

describe("countMin", () => {
  const logSpy = jest.spyOn(console, "log");

  it("return minutes of day", () => {
    jest.useFakeTimers().setSystemTime(new Date(2022, 5, 25, 18).getTime());
    countMin();
    expect(logSpy).toHaveBeenCalledWith("Прошло: 1080 мин");
  });
});
