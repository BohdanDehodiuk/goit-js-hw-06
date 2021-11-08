const input = document.querySelector("#name-input");

const textSpan = document.querySelector("#name-output");

input.addEventListener("input", changeInputValeu);

function changeInputValeu(event) {
  if (event.currentTarget.value === "") {
    return (textSpan.textContent = "Anonymous");
  }
  textSpan.textContent = event.currentTarget.value;
}
