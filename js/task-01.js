const listName = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listName.length}`);

const listCategory = document.querySelectorAll("#categories>li");

listCategory.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
