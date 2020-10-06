"use strict";

// Открытие и закрытие модального окна

var setupOpen = document.querySelector(`.setup-open`);
var setup = document.querySelector(`.setup`);
var setupClose = setup.querySelector(`.setup-close`);
var userNameInput = document.querySelector(`.setup-user-name`);

var onPopupEscPress = function (evt) {
  if (evt.key === `Escape` && userNameInput !== document.activeElement) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

// Открытие и закрытие модального окна

// Валидация

var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

userNameInput.addEventListener(`input`, function () {
  let valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(
        `Ещё ` + (MIN_NAME_LENGTH - valueLength) + ` симв.`
    );
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(
        `Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` симв.`
    );
  } else {
    userNameInput.setCustomValidity(``);
  }

  userNameInput.reportValidity();
});

// Валидация

// Изменение цветов
var setupWizard = document.querySelector(`.setup-wizard`);
var wizardCoat = setupWizard.querySelector(`.wizard-coat`);
var wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
var setupFireballWrap = document.querySelector(`.setup-fireball-wrap`);

var COAT_COLORS = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`,
];

wizardCoat.addEventListener(`click`, function () {
  wizardCoat.style = `fill: ${
    COAT_COLORS[createRandNumber(0, COAT_COLORS.length - 1)]
  };`;
});

var WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

wizardEyes.addEventListener(`click`, function () {
  wizardEyes.style = `fill: ${
    WIZARD_EYES_COLOR[createRandNumber(0, WIZARD_EYES_COLOR.length - 1)]
  };`;
});

var FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

setupFireballWrap.addEventListener(`click`, function () {
  setupFireballWrap.style = `background-color: ${
    FIREBALL_COLORS[createRandNumber(0, FIREBALL_COLORS.length - 1)]
  };`;
});

// Изменение цветов

var WIZARD_NAMES = [
  `Иван`,
  `Хуан Себастьян`,
  `Мария`,
  `Кристоф`,
  `Виктор`,
  `Юлия`,
  `Люпита`,
  `Вашингтон`,
];

var WIZARD_SECOND_NAMES = [
  `да Марья`,
  `Верон`,
  `Мирабелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`,
];

var WIZARD_COAT_COLOR = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`,
];

var similarListElement = setup.querySelector(`.setup-similar-list`);

var similarWizardTemplate = document
  .querySelector(`#similar-wizard-template`)
  .content.querySelector(`.setup-similar-item`);

var createRandNumber = function (min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

var wizards = [
  {
    name:
      WIZARD_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)] +
      ` ` +
      WIZARD_SECOND_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)],
    coatColor:
      WIZARD_COAT_COLOR[createRandNumber(0, WIZARD_COAT_COLOR.length - 1)],
    eyesColor:
      WIZARD_EYES_COLOR[createRandNumber(0, WIZARD_EYES_COLOR.length - 1)],
  },
  {
    name:
      WIZARD_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)] +
      ` ` +
      WIZARD_SECOND_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)],
    coatColor:
      WIZARD_COAT_COLOR[createRandNumber(0, WIZARD_COAT_COLOR.length - 1)],
    eyesColor:
      WIZARD_EYES_COLOR[createRandNumber(0, WIZARD_EYES_COLOR.length - 1)],
  },
  {
    name:
      WIZARD_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)] +
      ` ` +
      WIZARD_SECOND_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)],
    coatColor:
      WIZARD_COAT_COLOR[createRandNumber(0, WIZARD_COAT_COLOR.length - 1)],
    eyesColor:
      WIZARD_EYES_COLOR[createRandNumber(0, WIZARD_EYES_COLOR.length - 1)],
  },
  {
    name:
      WIZARD_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)] +
      ` ` +
      WIZARD_SECOND_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)],
    coatColor:
      WIZARD_COAT_COLOR[createRandNumber(0, WIZARD_COAT_COLOR.length - 1)],
    eyesColor:
      WIZARD_EYES_COLOR[createRandNumber(0, WIZARD_EYES_COLOR.length - 1)],
  },
];

var renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector(`.setup-similar`).classList.remove(`hidden`);
