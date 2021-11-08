const input = document.querySelector("#font-size-control");
input.setAttribute("value", 16);
const spanText = document.querySelector("#text");

input.addEventListener("input", function () {
  var size = input.value;
  spanText.style.fontSize = size + "px";
});
