const input = document.querySelector("#validation-input");

input.addEventListener("blur", changeInputColor);

function changeInputColor(event) {
  console.log(event.currentTarget.value.length);
  if (
    Number.parseInt(input.dataset.length) === event.currentTarget.value.length
  ) {
    return input.classList.add("valid");
  }
  if (
    Number.parseInt(input.dataset.length) !== event.currentTarget.value.length
  ) {
    return input.classList.add("invalid");
  }
}
