function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorName: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

refs.btn.addEventListener("click", () => {
  const hexColorName = getRandomHexColor();
  refs.body.style.backgroundColor = `${hexColorName}`;
  refs.colorName.textContent = `${hexColorName}`;
});
