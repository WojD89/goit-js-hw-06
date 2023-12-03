const catList = document.querySelectorAll("li.item");
const numOfCategories = catList.length;
console.log(`Number of categories: ${numOfCategories}`);

catList.forEach((category) => {
  const header = category.querySelector("h2");
  const categoryItems = category.querySelectorAll("li");

  console.log(`Category: ${header.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});
