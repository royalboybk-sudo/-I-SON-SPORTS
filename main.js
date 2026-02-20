let cart = [];
const list = document.getElementById("productList");

function renderProducts() {
  list.innerHTML = "";
  products.forEach(p => {
    if (!p.active) return;
    list.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart('${p.name}')">Add to Cart</button>
      </div>`;
  });
}
renderProducts();

function addToCart(name) {
  cart.push(name);
  document.getElementById("cartCount").innerText = cart.length;
}
