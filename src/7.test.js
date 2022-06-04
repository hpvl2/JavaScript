import { createUI } from "./7";

describe("test UI 7", () => {
  let el;

  beforeEach(() => {
    el = document.createElement("div");
    createUI(el);
  });

  it("test UI", () => {
    expect(el.querySelector("div.input")).toBeTruthy();
    expect(el.querySelector("input")).toBeTruthy();
    expect(el.querySelector("button")).toBeTruthy();
    expect(el.querySelector("div.list")).toBeTruthy();
  });

  it("add p on click buton", () => {
    el.querySelector(".input").value = "111";
    el.querySelector("button").click();
    expect(el.querySelector("div.list").lastChild.innerHTML).toBe("111");
  });
});
