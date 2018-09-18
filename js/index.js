var sliderButtons = document.querySelectorAll('.slider-switch');

for (var i = 0; i < sliderButtons.length; i++) {
  sliderButtons[i].addEventListener('click', switchSlider);
}

function switchSlider(e) {
  document.body.style['background-color'] = '#' + e.target.getAttribute('data-color');
  document.querySelector('.slider-switch.active').classList.remove('active');
  e.target.classList.add('active');
  document.querySelector('.slider-item.active').classList.remove('active');
  document.getElementById(e.target.getAttribute('data-slide')).classList.add('active');
}

document.getElementById('feedback-button').addEventListener('click', openModalWindow);
document.getElementById('feedback-close').addEventListener('click', closeModalWindow);

function openModalWindow(e) {
  document.getElementById('feedback-window').classList.add('is-active');
  e.preventDefault();
}

function closeModalWindow() {
  document.getElementById('feedback-window').classList.remove('is-active');
}

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map-interactive", {
    center: [59.93938527151221, 30.329293370361277],
    zoom: 16,
    controls: []
  });
  myMap.behaviors.disable("scrollZoom");
  myMap.controls.add("zoomControl", {position: {top: 15, left: 15}});
  var place = new ymaps.Placemark([59.93870117473946, 30.322978522415095], {}, {
    iconLayout: "default#image",
    iconImageHref: "img/pin.svg",
    iconImageSize: [79, 139],
    iconImageOffset: [-40, -139]
  });
  myMap.geoObjects.add(place);
}

document.getElementById('callback-form-submit').addEventListener('click', checkFormValues);

function checkFormValues(e) {
  var inputs = {
    name: document.getElementById('callback-name'),
    email: document.getElementById('callback-email'),
    comments: document.getElementById('callback-comments')
  };

  var goodValues = true;
  Object.values(inputs).forEach(function (input) {
    if (input.value.length < 1) {
      input.classList.add('error-on-input');
      goodValues = false;
    }
  });

  if (goodValues) {
    document.getElementById('callback-form').submit();
  }

  setTimeout(function () {
    Object.values(inputs).forEach(function (input) {
      input.classList.remove('error-on-input');
    });
  }, 500);

  e.preventDefault();
}


