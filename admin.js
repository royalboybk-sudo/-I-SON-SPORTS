const PASSWORD = "ISON@2026";

function check() {
  if (document.getElementById("pass").value === PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("panel").style.display = "block";
    renderAdmin();
  } else {
    alert("Wrong password");
  }
}

function renderAdmin() {
  const box = document.getElementById("adminList");
  box.innerHTML = "";
  products.forEach((p, i) => {
    box.innerHTML += `
      <div>
        ${p.name} - ₹${p.price}
        <button onclick="products[${i}].active=false;renderAdmin()">Hide</button>
      </div>`;
  });
}

function addProduct() {
  products.push({
    id: Date.now(),
    name: name.value,
    price: price.value,
    image: image.value,
    category: category.value,
    active: true
  });
  renderAdmin();
}
