//MODAL-CART

let modalCart = document.querySelector('.modal-cart');
let buyButtons = document.querySelectorAll('.buy-button');
let modalCartCloses = document.querySelectorAll('.modal-cart-close');
let modalCartContinue = document.querySelector('.modal-cart-continue');

for (let i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener('click', function () {
    modalCart.classList.remove('visually-hidden');
    modalCart.classList.add('modal-appear');
  });
}

for (let i = 0; i < modalCartCloses.length; i++) {
  modalCartCloses[i].addEventListener('click', function () {
    modalCart.classList.add('visually-hidden');
    modalCart.classList.remove('modal-appear');
  });
}


modalCartContinue.addEventListener('click', function (evt)  {
  evt.preventDefault();
  modalCart.classList.add('visually-hidden');
  modalCart.classList.remove('modal-appear');
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (!modalCart.classList.contains("visually-hidden")) {
      evt.preventDefault();
      modalCart.classList.add("visually-hidden");
      modalCart.classList.remove('modal-appear');
    }
  }
});
