const cartItems = document.getElementById("cart-items");

const totalPrice = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        cartItems.innerHTML += `

        <div class="cart-product">

            <img src="${product.image}" width="120">

            <div>
                <h3>${product.name}</h3>

                <h5>${product.price} XOF</h5>

                <p>Quantité : ${product.quantity}</p>                    

                <button onclick="removeProduct(${index})">
                    Supprimer
                </button>
            </div>

        </div>

        `;
    });

    totalPrice.textContent = `Total : ${total} XOF`;

}



function removeProduct(index){

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

displayCart();