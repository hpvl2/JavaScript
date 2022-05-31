import { countMin } from "./8-2";

describe("countMin", () => {
  const log = console.log;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = log;
  });

  it("return minutes of day", () => {
    jest.useFakeTimers().setSystemTime(new Date(2022, 5, 25, 18).getTime());
    countMin();
    expect(console.log).toHaveBeenCalledWith("Прошло: 1080 мин");
  });
});
