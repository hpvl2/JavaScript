let element;

export function createUI(e) {
  element = e;
  element.innerHTML += `<div class="input">
        <input class="input" type="text">
        <button hidden class="button"></button>"
    </div>`;

  element.innerHTML += `<div class="list">
        <p>1</p>
        <p>2</p>
        <p>3</p>
    </div>`;

  const button = element.querySelector(".button");
  button.addEventListener("click", addElement);

  const input = element.querySelector(".input");
  input.addEventListener("keyup", hideButton);
}

export function hideButton() {
  const button = element.querySelector("button");
  const text = getInputText();
  button.hidden = text.length === 0;
}

export function getInputText() {
  const input = element.querySelector(".input");
  return input.value;
}

export function addElement() {
  const p = document.createElement("p");
  p.innerHTML = getInputText();
  const list = element.querySelector("div.list");
  list.append(p);
  const count = list.childElementCount;
  if (count > 5) {
    const firstItem = list.querySelector("p");
    firstItem.remove();
  }
}
