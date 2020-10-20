"use strict";

// Изменение цветов

(function () {
  var setupWizard = document.querySelector(`.setup-wizard`);
  var wizardCoatElement = setupWizard.querySelector(`.wizard-coat`);
  var wizardEyesElement = setupWizard.querySelector(`.wizard-eyes`);
  var setupFireballWrap = document.querySelector(`.setup-fireball-wrap`);

  window.colorize.coloring(wizardCoatElement, window.colorize.coatColor);
  window.colorize.coloring(wizardEyesElement, window.colorize.eyesColor);
  window.colorize.coloring(setupFireballWrap, window.colorize.fireballColor);
})();
