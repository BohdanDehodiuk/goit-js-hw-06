const input = document.querySelector("#font-size-control");
input.setAttribute("value", 50);
const spanText = document.querySelector("#text");
spanText.style.fontSize = "50px";

input.addEventListener("input", function () {
  var size = input.value;
  spanText.style.fontSize = size + "px";
});
