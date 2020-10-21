"use strict";

(function () {
  var URL_UPLOAD = "https://21.javascript.pages.academy/code-and-magick";
  var URL_DOWNLOAD = "https://21.javascript.pages.academy/code-and-magick/data";

  var StatusCode = {
    OK: 200,
  };
  var TIMEOUT_IN_MS = 10000;

  var uploadData = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("load", function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError("Статус ответа: " + xhr.status + " " + xhr.statusText);
      }
    });
    xhr.addEventListener("error", function () {
      onError("Произошла ошибка соединения");
    });

    xhr.open("POST", URL_UPLOAD);
    xhr.send(data);
  };

  var downloadData = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("load", function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError("Статус ответа: " + xhr.status + " " + xhr.statusText);
      }
    });
    xhr.addEventListener("error", function () {
      onError("Произошла ошибка соединения");
    });
    xhr.addEventListener("timeout", function () {
      onError("Запрос не успел выполниться за " + xhr.timeout + "мс");
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open("GET", URL_DOWNLOAD);
    xhr.send();
  };

  window.backend = {
    load: downloadData,
    save: uploadData,
  };
})();
