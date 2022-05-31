import { circle } from "./9-2";

describe("circleMeasures", () => {
  let origAlert;

  beforeEach(() => {
    origAlert = window.alert;
  });

  afterEach(() => {
    window.alert = origAlert;
  });

  it("return [25.1, 50.3] for radius = 4", () => {
    jest.spyOn(window, "prompt").mockReturnValue(4);
    expect(circle()).toStrictEqual(["25.1", "50.3"]);
  });
});
