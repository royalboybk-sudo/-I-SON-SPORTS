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

let cart = [];

function addToCart(item) {
  cart.push(item);
  alert(item + " added to cart 🛒");
  console.log(cart);
}

function likeItem(btn) {
  btn.innerText = "❤️ Liked";
  btn.style.background = "#ff1e56";
}

