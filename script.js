const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("keyup", function () {
  const value = searchInput.value.toLowerCase();

  products.forEach(product => {
    const name = product.getAttribute("data-name").toLowerCase();
    product.style.display = name.includes(value) ? "block" : "none";
  });
});

function filterItems(category) {
  products.forEach(product => {
    if (category === "all") {
      product.style.display = "block";
    } else {
      product.style.display =
        product.getAttribute("data-category") === category
          ? "block"
          : "none";
    }
  });
}
