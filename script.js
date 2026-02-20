const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();
  products.forEach(p => {
    const name = p.dataset.name.toLowerCase();
    p.style.display = name.includes(value) ? "block" : "none";
  });
});

function filterItems(category) {
  products.forEach(p => {
    p.style.display =
      category === "all" || p.dataset.category === category
        ? "block"
        : "none";
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
