const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");
const cartCount = document.getElementById("cartCount");

let cart = [];

// SEARCH
searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();
  products.forEach(p => {
    p.style.display = p.dataset.name.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});

// FILTER
function filterItems(category) {
  products.forEach(p => {
    p.style.display =
      category === "all" || p.dataset.category === category
        ? "block"
        : "none";
  });
}

// CART
function addToCart(item) {
  cart.push(item);
  cartCount.innerText = cart.length;
  alert(item + " added to cart 🛒");
}

// LIKE
function likeItem(btn) {
  btn.innerText = "❤️ Liked";
  btn.style.background = "#ff1e56";
}
