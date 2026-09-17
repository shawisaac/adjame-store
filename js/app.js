const productsContainer = document.getElementById("products-container");


const cartCount = document.getElementById("cart-count")
// let cart = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function displayProducts() {

  products.forEach(product => {

    productsContainer.innerHTML += `
    
      <div class="free">

        <div class="free1">
          <img src="${product.image}" alt="${product.name}">
          <h4>${product.name}</h4>
        </div>

        <div class="free2">

          <h3 class="prix">
            <del>${product.oldPrice} XOF</del><br>
            <span>${product.price} XOF</span>
          </h3>

        </div>

        <button onclick="addToCart(${product.id})">
           Add to panier
        </button>

      </div>

    `;
  });

}

displayProducts();

function addToCart(id) {

  let product = products.find(p => p.id === id);

  let existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
}

function updateCartCount(){

    cartCount.textContent = cart.length;

}

const searchIcon = document.getElementById("search-icon");

const searchBox = document.getElementById("search-box");

const closeSearch = document.getElementById("close-search");

const searchInput = document.getElementById("search-input");

searchIcon.addEventListener("click", () => {

    searchBox.classList.add("active");

});

closeSearch.addEventListener("click", () => {

    searchBox.classList.remove("active");

});

searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product =>

        product.name.toLowerCase().includes(value)

    );

    renderProducts(filteredProducts);

});