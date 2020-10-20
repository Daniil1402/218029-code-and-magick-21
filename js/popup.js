"use strict";

// Открытие и закрытие модального окна

(function () {
  var setupOpen = document.querySelector(`.setup-open`);
  var setup = document.querySelector(`.setup`);
  var setupClose = setup.querySelector(`.setup-close`);
  var userNameInput = document.querySelector(`.setup-user-name`);

  var onPopupEscPress = function (evt) {
    if (userNameInput !== document.activeElement) {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  var openPopup = function () {
    setup.classList.remove(`hidden`);

    document.addEventListener(`keydown`, onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add(`hidden`);
    setup.style = `top: 80px; left: 50%;`;

    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener(`click`, function () {
    closePopup();
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });
})();
