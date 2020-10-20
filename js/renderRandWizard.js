"use strict";

(function () {
  var setup = document.querySelector(`.setup`);

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

  var similarListElement = setup.querySelector(`.setup-similar-list`);

  var similarWizardTemplate = document
    .querySelector(`#similar-wizard-template`)
    .content.querySelector(`.setup-similar-item`);

  var createRandNumber = function (min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

  var wizards = [
    {
      name:
        WIZARD_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)] +
        ` ` +
        WIZARD_SECOND_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)],
      coatColor:
        window.colorize.coatColor[
          createRandNumber(0, window.colorize.coatColor.length - 1)
        ],
      eyesColor:
        window.colorize.eyesColor[
          createRandNumber(0, window.colorize.eyesColor.length - 1)
        ],
    },
    {
      name:
        WIZARD_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)] +
        ` ` +
        WIZARD_SECOND_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)],
      coatColor:
        window.colorize.coatColor[
          createRandNumber(0, window.colorize.coatColor.length - 1)
        ],
      eyesColor:
        window.colorize.eyesColor[
          createRandNumber(0, window.colorize.eyesColor.length - 1)
        ],
    },
    {
      name:
        WIZARD_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)] +
        ` ` +
        WIZARD_SECOND_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)],
      coatColor:
        window.colorize.coatColor[
          createRandNumber(0, window.colorize.coatColor.length - 1)
        ],
      eyesColor:
        window.colorize.eyesColor[
          createRandNumber(0, window.colorize.eyesColor.length - 1)
        ],
    },
    {
      name:
        WIZARD_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)] +
        ` ` +
        WIZARD_SECOND_NAMES[createRandNumber(0, WIZARD_NAMES.length - 1)],
      coatColor:
        window.colorize.coatColor[
          createRandNumber(0, window.colorize.coatColor.length - 1)
        ],
      eyesColor:
        window.colorize.eyesColor[
          createRandNumber(0, window.colorize.eyesColor.length - 1)
        ],
    },
  ];

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent =
      wizard.name;
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
})();
