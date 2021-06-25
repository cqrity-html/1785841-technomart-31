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

for (var i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener('click', function () {
    modalCart.classList.remove('visually-hidden');
    modalCart.classList.add('modal-appear');
  });
}

for (var i = 0; i < modalCartCloses.length; i++) {
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
    feedbackForm.classList.remove("modal-error");
    feedbackForm.offsetWidth = feedbackForm.offsetWidth;
    feedbackForm.classList.add("modal-error");
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

//MODAL-MAP

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

//SLIDER

for (var i = 0; i < sliderToggleButtons.length; i++) {
  sliderToggleButtons[i].addEventListener('click', function () {
    sliderDrills.classList.toggle('visually-hidden');
  });
}

//SLIDER-SERVICES

/*
let services = document.querySelectorAll('.service');
let servicesListDescriptions = document.querySelectorAll('.services-list-description');

services.forEach(service => {
  service.addEventListener('click', function (e) {
  const serviceActive = e.target.dataset.select;
  console.log(serviceActive);
  console.log(serviceActive);
  for (var i = 0; i < servicesListDescriptions.length; i++) {
      servicesListDescriptions[i].display='none';
      serviceActive.display='block';}
});
});
*/


/*
let serviceDelivery = document.querySelector(
  dataset.select('service-delivery'));
let serviceGuarantee = document.querySelector(
  dataset.select('service-guarantee'));
let serviceCredit = document.querySelector(
  dataset.select('service-credit'));
let deliveryDescription = document.querySelector(
  dataset.el('service-delivery'));
let guaranteeDescription = document.querySelector(
  dataset.el('service-guarantee'));
let creditDescription = document.querySelector(
  dataset.el('service-credit'));

serviceDelivery.addEventListener('click', function () {
  deliveryDescription.display='block';
  console.log('Доставка нажата');
});

serviceGuarantee.addEventListener('click', function () {
  guaranteeDescription.display='block';
  console.log('Гарантия нажата');
});

serviceCredit.addEventListener('click', function () {
  creditDescription.display='block';
  console.log('Кредит нажат');
});
*/
