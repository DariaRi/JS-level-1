'use strict';

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    let cart = new Cart();
    const btnCart = document.getElementById('btnCart');
    btnCart.addEventListener("click", toggleVisability);
    const products = document.querySelectorAll('.product');
    products.forEach(function (product) {
        product.querySelector('.get-product').addEventListener('click', {handleEvent: addToCart, cart: cart});
    });

    document.body.addEventListener( 'click', {handleEvent: removeProductFromCart, cart: cart});
}
function toggleVisability() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

function addToCart(event) {
    this.cart.addToCart(event.target.parentNode);
}

function removeProductFromCart(event) {
    if( event.target.className == 'icon-trash' ) {
        let productId = event.target.dataset.id;
        this.cart.removeProductFromCart(productId);
    };
}
