"use strict";

(function () {
  var WIZARD_COAT_COLORS = [
    `rgb(101, 137, 164)`,
    `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`,
    `rgb(215, 210, 55)`,
    `rgb(0, 0, 0)`,
  ];

  var WIZARD_EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

  var FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

  var createRandNumber = function (min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

  window.colorize = {
    coloring(element, color) {
      element.addEventListener(`click`, function () {
        if (element.tagName.toLowerCase() === `div`) {
          element.style.backgroundColor =
            color[createRandNumber(0, color.length - 1)];
        } else {
          element.style.fill = color[createRandNumber(0, color.length - 1)];
        }
      });
    },
    coatColor: WIZARD_COAT_COLORS,
    eyesColor: WIZARD_EYES_COLORS,
    fireballColor: FIREBALL_COLORS,
  };
})();
