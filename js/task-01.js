const listEl = document.querySelector("#categories");
console.log(`Number of categories:`, listEl.childElementCount);

const elementItem = document.querySelectorAll(".item");
console.log(`Category:`, elementItem[0].firstElementChild.textContent);
console.log(`Elements:`, elementItem[0].lastElementChild.childElementCount);
console.log(`Category:`, elementItem[1].firstElementChild.textContent);
console.log(`Elements:`, elementItem[1].lastElementChild.childElementCount);
console.log(`Category:`, elementItem[2].firstElementChild.textContent);
console.log(`Elements:`, elementItem[2].lastElementChild.childElementCount);
