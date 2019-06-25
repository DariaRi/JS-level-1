'use strict';
class Cart {
    constructor() {
        this.products = [];
        this.totalPrice = 0;
    }
   /* get products () {
        return this._products;
    }
    set products (products) {
        this._products = products;
    }*/
    addToCart(parent) {
        let productId = parent.querySelector('.product-id').textContent;
        let product = {
            id: productId,
            name: parent.querySelector('.product-name').textContent,
            price: parent.querySelector('.product-price').textContent,
            count: 1,
        };
        if (productId in this.products) {
            this.products[productId].count++;
        } else {
            this.products[productId] = product;
        }

        this.refreshCart();
    }

    removeProductFromCart(productId) {
        this.products = this.products.filter(function(product, value) {
            return product.id !== productId
        });
        this.refreshCart();
    }

    recountTotalPrice() {
        this.totalPrice = 0;

        this.products.forEach(function(product) {
            this.totalPrice += product.price * product.count;
        }, this);

        let totalPriceElem = document.querySelector(".total");

        totalPriceElem.innerHTML = this.totalPrice;
    }

    refreshCart() {
        let cartBody = document.querySelector(".table tbody");
        cartBody.innerHTML = "";
        this.products.forEach(function(product) {
           let tr = document.createElement("tr");
           let tdId = document.createElement("td");
           tdId.innerHTML = product.id;
           let tdName = document.createElement("td");
           tdName.innerHTML = product.name;
           let tdPrice = document.createElement("td");
           tdPrice.innerHTML = product.price;
           let tdCount = document.createElement("td");
           tdCount.innerHTML = product.count;
           let tdTrash = document.createElement("td");
           let iconTrash = document.createElement("i");
           iconTrash.dataset.id = product.id;
           iconTrash.className = "icon-trash";
           tdTrash.appendChild(iconTrash);

           tr.appendChild(tdId);
           tr.appendChild(tdName);
           tr.appendChild(tdPrice);
           tr.appendChild(tdCount);
           tr.appendChild(tdTrash);
           cartBody.appendChild(tr);
        });

        this.recountTotalPrice();
    }

}