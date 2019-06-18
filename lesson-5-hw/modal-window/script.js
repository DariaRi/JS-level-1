'use strict';
let modal = document.querySelector('#modal');
let overflow = document.createElement('div');
function openModal() {
    overflow.className = "overflow";
    document.body.appendChild(overflow);
    let height = modal.offsetHeight; // отцентровали модальное окно
    modal.style.marginTop = - height / 2 + "px";
    modal.style.top = "50%";
}
overflow.onclick = function () { // При клике на бг закрываем модальное окно
    modal.style.top = "-100%";
    overflow.remove();
};