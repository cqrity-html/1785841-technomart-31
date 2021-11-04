//SLIDER-SERVICES

let services = document.querySelectorAll('.service');
let servicesContainer = document.querySelector('.services');
let servicesListDescriptions = document.querySelectorAll('.services-list-description');
let serviceDelivery = document.querySelector('#service-delivery');
let serviceGuarantee = document.querySelector('#service-guarantee');
let serviceCredit = document.querySelector('#service-credit');
let deliveryDescription = document.querySelector('#delivery-description');
let guaranteeDescription = document.querySelector('#guarantee-description');
let creditDescription = document.querySelector('#credit-description');

servicesContainer.addEventListener('click', (evt) => {
  const target = evt.target;
  for (let i = 0; i <= services.length; i++) {
    if (!target.classList.contains('service-active')) {
      services.forEach((service) => service.classList.remove('service-active'));
      target.classList.add('service-active');
    }
  }
});

serviceDelivery.addEventListener('click', function () {
  servicesListDescriptions.forEach(description => {
    description.style.display='none';
  });
  deliveryDescription.style.display='block';
});

serviceGuarantee.addEventListener('click', function () {
  servicesListDescriptions.forEach(description => {
    description.style.display='none';
  });
  guaranteeDescription.style.display='block';
});

serviceCredit.addEventListener('click', function () {
  servicesListDescriptions.forEach(description => {
    description.style.display='none';
  });
  creditDescription.style.display='block';
});

//MODAL-FEEDBACK

let modalFeedback = document.querySelector('.modal-feedback');
let feedbackButton = document.querySelector('.feedback-button');
let feedbackForm = document.querySelector(".feedback-form");
let feedbackName = document.querySelector(".feedback-name");
let feedbackEmail = document.querySelector(".feedback-email");
let modalClose = document.querySelector('.modal-close');

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

//MODAL-MAP

let modalMap = document.querySelector('.modal-map');
let modalMapLink = document.querySelector('.modal-map-link');
let modalMapClose = document.querySelector('.modal-map-close');

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

let sliderDrills = document.querySelector('.slider-drills');
let sliderToggleButtons = document.querySelectorAll('.slider-toggle-button');

for (let i = 0; i < sliderToggleButtons.length; i++) {
  sliderToggleButtons[i].addEventListener('click', function () {
    sliderDrills.classList.toggle('visually-hidden');
  });
}

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
