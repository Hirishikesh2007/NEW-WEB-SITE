let total = 0;

function addToCart(name, price) {
    const cart = document.getElementById("cart");

    const li = document.createElement("li");
    li.textContent = `${name} - ₹${price}`;
    cart.appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}