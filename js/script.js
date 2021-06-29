let modalCart = document.querySelector('.modal-cart');
let buyButtons = document.querySelectorAll('.buy-button');
let modalCartCloses = document.querySelectorAll('.modal-cart-close');
let modalFeedback = document.querySelector('.modal-feedback');
let feedbackButton = document.querySelector('.feedback-button');
let feedbackForm = document.querySelector(".feedback-form");
let feedbackName = document.querySelector(".feedback-name");
let feedbackEmail = document.querySelector(".feedback-email");
let modalClose = document.querySelector('.modal-close');
let modalMap = document.querySelector('.modal-map');
let modalMapLink = document.querySelector('.modal-map-link');
let modalMapClose = document.querySelector('.modal-map-close');
let sliderDrills = document.querySelector('.slider-drills');
let sliderToggleButtons = document.querySelectorAll('.slider-toggle-button');

//MODAL-CART

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

window.addEventListener("keydown", function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (!modalCart.classList.contains("visually-hidden")) {
      evt.preventDefault();
      modalCart.classList.add("visually-hidden");
      modalCart.classList.remove('modal-appear');
    }
  }
});

//MODAL-FEEDBACK

if (feedbackButton && modalFeedback && feedbackName && modalClose) {

  feedbackButton.addEventListener('click', function (event)  {
    event.preventDefault();
    modalFeedback.classList.remove('visually-hidden');
    modalFeedback.classList.add('modal-appear');
    feedbackName.focus();
  });

  modalClose.addEventListener('click', function ()  {
    modalFeedback.classList.add('visually-hidden');
    modalFeedback.classList.remove("modal-error");
    modalFeedback.classList.remove('modal-appear');
  });

  feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-error");
      modalFeedback.offsetWidth = feedbackForm.offsetWidth;
      modalFeedback.classList.add("modal-error");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      if (!modalFeedback.classList.contains("visually-hidden")) {
        evt.preventDefault();
        modalFeedback.classList.add("visually-hidden");
        modalFeedback.classList.remove("modal-error");
        modalFeedback.classList.remove('modal-appear');
      }
    }
  });
}

//MODAL-MAP

if (modalMapLink && modalMap && modalMapClose) {

  modalMapLink.addEventListener('click', function (event) {
    event.preventDefault();
    modalMap.classList.remove('visually-hidden');
    modalMap.classList.add('modal-appear');
  });

  modalMapClose.addEventListener('click', function () {
    modalMap.classList.add('visually-hidden');
    modalMap.classList.remove('modal-appear');
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      if (!modalMap.classList.contains("visually-hidden")) {
        evt.preventDefault();
        modalMap.classList.add("visually-hidden");
        modalMap.classList.remove('modal-appear');
      }
    }
  });
}

//SLIDER

for (let i = 0; i < sliderToggleButtons.length; i++) {
  sliderToggleButtons[i].addEventListener('click', function () {
    sliderDrills.classList.toggle('visually-hidden');
  });
}
