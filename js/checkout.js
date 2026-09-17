const checkoutItems = document.getElementById("checkout-items");

const checkoutTotal = document.getElementById("checkout-total");

const form = document.getElementById("checkout-form");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCheckout(){

    let total = 0;

    cart.forEach(product => {

        total += product.price * product.quantity;

        checkoutItems.innerHTML += `

        <div class="checkout-product">

            <h4>${product.name}</h4>

            <p>
              ${product.quantity} x ${product.price} XOF
            </p>

        </div>

        `;
    });

    checkoutTotal.textContent = `Total : ${total} XOF`;

}

displayCheckout();

form.addEventListener("submit", function(e){

    e.preventDefault();

    const order = {

        customer: {
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            address: document.getElementById("address").value
        },

        products: cart

    };

    console.log(order);

    alert("Commande envoyée !");

});