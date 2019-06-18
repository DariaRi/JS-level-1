'use strict';

const buttons = document.querySelectorAll('button');

buttons.forEach(function (button) {
    button.addEventListener('click', function(event) {
        let parent = event.target.parentNode;
        let img = parent.querySelector('img');

        if (!parent.classList.contains('opened')){
            img.style.display='none';
            let txt = document.createElement('div');

            txt.className = 'desc';
            txt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at, deleniti distinctio libero maiores perferendis ratione. Doloremque pariatur sit vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at, deleniti distinctio libero maiores perferendis ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at, deleniti distinctio libero maiores perferendis ratione.Aliquam at, deleniti distinctio libero maiores perferendis ratione.';

            parent.insertBefore(txt, img);
            button.innerHTML = 'Cancel';
            parent.classList.add('opened');
        } else {
            button.innerHTML = 'More info';
            img.style.display='block';
            parent.querySelector('div').remove();
            parent.classList.remove('opened');
        }
    });
});