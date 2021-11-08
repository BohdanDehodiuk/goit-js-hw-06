const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredienList = document.querySelector("#ingredients");
console.log(ingredienList);

const ings = ingredients.map((option) => {
  const ingsItem = document.createElement("li");
  ingsItem.classList.add("item");
  ingsItem.textContent = option;

  return ingsItem;
});

console.log(ings);

ingredienList.append(...ings);
