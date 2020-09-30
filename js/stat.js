"use strict";

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 20;
var FONT_GAP = 15;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var drawText = function (ctx, text, x, y) {
  ctx.fillStyle = "#000";
  ctx.font = "16px PT Mono";
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP / 2, CLOUD_Y + GAP / 2, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

  drawText(ctx, "Ура вы победили!", CLOUD_X + GAP, CLOUD_Y + GAP * 1.5);
  drawText(
    ctx,
    "Список результатов:",
    CLOUD_X + GAP,
    CLOUD_Y + GAP * 1.5 + FONT_GAP
  );

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = "black";
    ctx.fillText(
      players[i],
      CLOUD_X + GAP * 2 + (BAR_GAP + BAR_WIDTH) * i,
      CLOUD_Y + CLOUD_HEIGHT - GAP
    );

    ctx.fillText(
      parseInt(times[i]),
      CLOUD_X + GAP * 2 + (BAR_GAP + BAR_WIDTH) * i,
      CLOUD_Y +
        CLOUD_HEIGHT -
        GAP * 2.5 +
        ((BAR_HEIGHT * times[i]) / maxTime) * -1
    );

    if (players[i] == "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      var createColor = function (min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      };
      var transparency = createColor(1, 100) + "%";
      ctx.fillStyle = `hsl(246, ${transparency}, 50%)`;
    }

    ctx.fillRect(
      CLOUD_X + GAP * 2 + (BAR_GAP + BAR_WIDTH) * i,
      CLOUD_Y + CLOUD_HEIGHT - GAP * 2,
      BAR_WIDTH,
      ((BAR_HEIGHT * times[i]) / maxTime) * -1
    );
  }
};