// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/dropdown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropDownOptions = dropDownOptions;
exports.openInfo = exports.openDetailsDD = exports.openModalDD = void 0;

function dropDownOptions() {
  document.getElementById('editDropDown').classList.toggle('is-visible');
}

var openModalDD = function openModalDD(id) {
  document.querySelector("[data-value=\"".concat(id, "\"]")).classList.toggle('is-visible');
};

exports.openModalDD = openModalDD;

var openDetailsDD = function openDetailsDD(id) {
  var t = document.querySelector("[data-details=\"".concat(id, "\"]")).classList.toggle('is-visible');
};

exports.openDetailsDD = openDetailsDD;

var openInfo = function openInfo(id) {
  document.querySelector("[data-info=\"".concat(id, "\"]")).classList.toggle('is-visible');
};

exports.openInfo = openInfo;
},{}],"data/modal.json":[function(require,module,exports) {
module.exports = {
  "modal": [{
    "id": "1",
    "hour": "8:00 às 10:00",
    "local": "Jurere Internacional",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "2",
    "hour": "8:00 às 15:00",
    "local": "Rio De Janeiro",
    "gradeBold": "4",
    "grade": "(1.500 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "3",
    "hour": "8:00 às 11:00",
    "local": "São Paulo",
    "gradeBold": "4.2",
    "grade": "(1.230 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "4",
    "hour": "8:00 às 10:00",
    "local": "Jurere Internacional",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "5",
    "hour": "8:00 às 15:00",
    "local": "Rio De Janeiro",
    "gradeBold": "4",
    "grade": "(1.500 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "6",
    "hour": "8:00 às 11:00",
    "local": "São Paulo",
    "gradeBold": "4.2",
    "grade": "(1.230 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "7",
    "hour": "8:00 às 10:00",
    "local": "Jurere Internacional",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "8",
    "hour": "8:00 às 15:00",
    "local": "Rio De Janeiro",
    "gradeBold": "4",
    "grade": "(1.500 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "9",
    "hour": "8:00 às 11:00",
    "local": "São Paulo",
    "gradeBold": "4.2",
    "grade": "(1.230 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "10",
    "hour": "8:00 às 10:00",
    "local": "Jurere Internacional",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "11",
    "hour": "8:00 às 15:00",
    "local": "Rio De Janeiro",
    "gradeBold": "4",
    "grade": "(1.500 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "12",
    "hour": "8:00 às 11:00",
    "local": "São Paulo",
    "gradeBold": "4.2",
    "grade": "(1.230 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }]
};
},{}],"data/details.json":[function(require,module,exports) {
module.exports = {
  "details": [{
    "id": "1",
    "hour": "8:00 às 10:00",
    "local": "Jurere Internacional",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "2",
    "hour": "8:00 às 15:00",
    "local": "Rio De Janeiro",
    "gradeBold": "4",
    "grade": "(1.500 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "3",
    "hour": "8:00 às 11:00",
    "local": "São Paulo",
    "gradeBold": "4.2",
    "grade": "(1.230 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "4",
    "hour": "8:00 às 10:00",
    "local": "Jurere Internacional",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "5",
    "hour": "8:00 às 15:00",
    "local": "Rio De Janeiro",
    "gradeBold": "4",
    "grade": "(1.500 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "6",
    "hour": "8:00 às 11:00",
    "local": "São Paulo",
    "gradeBold": "4.2",
    "grade": "(1.230 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "7",
    "hour": "8:00 às 10:00",
    "local": "Jurere Internacional",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "8",
    "hour": "8:00 às 15:00",
    "local": "Rio De Janeiro",
    "gradeBold": "4",
    "grade": "(1.500 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "9",
    "hour": "8:00 às 11:00",
    "local": "São Paulo",
    "gradeBold": "4.2",
    "grade": "(1.230 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "10",
    "hour": "8:00 às 10:00",
    "local": "Jurere Internacional",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "11",
    "hour": "8:00 às 15:00",
    "local": "Rio De Janeiro",
    "gradeBold": "4",
    "grade": "(1.500 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }, {
    "id": "12",
    "hour": "8:00 às 11:00",
    "local": "São Paulo",
    "gradeBold": "4.2",
    "grade": "(1.230 avaliações)",
    "image": "roteiro-sao-paulo.png"
  }]
};
},{}],"data/info.json":[function(require,module,exports) {
module.exports = {
  "info": [{
    "id": "1",
    "content": "1 ipsum dolor sit amet, consectetur adipiscing elit. At diam in mauris varius maecenas adipiscing. Faucibus erat nisl vel, consequat aliquam vehicula neque, elementum. Non aliquam neque pharetra lacus, et elementum. Posuere ante tristique est faucibus pharetra. Turpis quisque arcu amet libero at dolor sit ipsum pellentesque.",
    "image": "destinos-gramado.png",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "local": "Jurere Internacional"
  }, {
    "id": "2",
    "content": "2 ipsum dolor sit amet, consectetur adipiscing elit. At diam in mauris varius maecenas adipiscing. Faucibus erat nisl vel, consequat aliquam vehicula neque, elementum. Non aliquam neque pharetra lacus, et elementum. Posuere ante tristique est faucibus pharetra. Turpis quisque arcu amet libero at dolor sit ipsum pellentesque.",
    "image": "destinos-gramado.png",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "local": "Jurere Internacional"
  }, {
    "id": "3",
    "content": "3 ipsum dolor sit amet, consectetur adipiscing elit. At diam in mauris varius maecenas adipiscing. Faucibus erat nisl vel, consequat aliquam vehicula neque, elementum. Non aliquam neque pharetra lacus, et elementum. Posuere ante tristique est faucibus pharetra. Turpis quisque arcu amet libero at dolor sit ipsum pellentesque.",
    "image": "destinos-gramado.png",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "local": "Jurere Internacional"
  }, {
    "id": "4",
    "content": "4 ipsum dolor sit amet, consectetur adipiscing elit. At diam in mauris varius maecenas adipiscing. Faucibus erat nisl vel, consequat aliquam vehicula neque, elementum. Non aliquam neque pharetra lacus, et elementum. Posuere ante tristique est faucibus pharetra. Turpis quisque arcu amet libero at dolor sit ipsum pellentesque.",
    "image": "destinos-gramado.png",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "local": "Jurere Internacional"
  }, {
    "id": "5",
    "content": "5 ipsum dolor sit amet, consectetur adipiscing elit. At diam in mauris varius maecenas adipiscing. Faucibus erat nisl vel, consequat aliquam vehicula neque, elementum. Non aliquam neque pharetra lacus, et elementum. Posuere ante tristique est faucibus pharetra. Turpis quisque arcu amet libero at dolor sit ipsum pellentesque.",
    "image": "destinos-gramado.png",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "local": "Jurere Internacional"
  }, {
    "id": "6",
    "content": "6 ipsum dolor sit amet, consectetur adipiscing elit. At diam in mauris varius maecenas adipiscing. Faucibus erat nisl vel, consequat aliquam vehicula neque, elementum. Non aliquam neque pharetra lacus, et elementum. Posuere ante tristique est faucibus pharetra. Turpis quisque arcu amet libero at dolor sit ipsum pellentesque.",
    "image": "destinos-gramado.png",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "local": "Jurere Internacional"
  }, {
    "id": "7",
    "content": "7 ipsum dolor sit amet, consectetur adipiscing elit. At diam in mauris varius maecenas adipiscing. Faucibus erat nisl vel, consequat aliquam vehicula neque, elementum. Non aliquam neque pharetra lacus, et elementum. Posuere ante tristique est faucibus pharetra. Turpis quisque arcu amet libero at dolor sit ipsum pellentesque.",
    "image": "destinos-gramado.png",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "local": "Jurere Internacional"
  }, {
    "id": "8",
    "content": "8 ipsum dolor sit amet, consectetur adipiscing elit. At diam in mauris varius maecenas adipiscing. Faucibus erat nisl vel, consequat aliquam vehicula neque, elementum. Non aliquam neque pharetra lacus, et elementum. Posuere ante tristique est faucibus pharetra. Turpis quisque arcu amet libero at dolor sit ipsum pellentesque.",
    "image": "destinos-gramado.png",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "local": "Jurere Internacional"
  }, {
    "id": "9",
    "content": "9 ipsum dolor sit amet, consectetur adipiscing elit. At diam in mauris varius maecenas adipiscing. Faucibus erat nisl vel, consequat aliquam vehicula neque, elementum. Non aliquam neque pharetra lacus, et elementum. Posuere ante tristique est faucibus pharetra. Turpis quisque arcu amet libero at dolor sit ipsum pellentesque.",
    "image": "destinos-gramado.png",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "local": "Jurere Internacional"
  }, {
    "id": "10",
    "content": "10 ipsum dolor sit amet, consectetur adipiscing elit. At diam in mauris varius maecenas adipiscing. Faucibus erat nisl vel, consequat aliquam vehicula neque, elementum. Non aliquam neque pharetra lacus, et elementum. Posuere ante tristique est faucibus pharetra. Turpis quisque arcu amet libero at dolor sit ipsum pellentesque.",
    "image": "destinos-gramado.png",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "local": "Jurere Internacional"
  }, {
    "id": "11",
    "content": "11 ipsum dolor sit amet, consectetur adipiscing elit. At diam in mauris varius maecenas adipiscing. Faucibus erat nisl vel, consequat aliquam vehicula neque, elementum. Non aliquam neque pharetra lacus, et elementum. Posuere ante tristique est faucibus pharetra. Turpis quisque arcu amet libero at dolor sit ipsum pellentesque.",
    "image": "destinos-gramado.png",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "local": "Jurere Internacional"
  }, {
    "id": "12",
    "content": "12 ipsum dolor sit amet, consectetur adipiscing elit. At diam in mauris varius maecenas adipiscing. Faucibus erat nisl vel, consequat aliquam vehicula neque, elementum. Non aliquam neque pharetra lacus, et elementum. Posuere ante tristique est faucibus pharetra. Turpis quisque arcu amet libero at dolor sit ipsum pellentesque.",
    "image": "destinos-gramado.png",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "local": "Jurere Internacional"
  }]
};
},{}],"js/build.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildInfoImages = exports.buildInfo = exports.buildDetails = exports.buildModal = void 0;

var buildModal = function buildModal(modal) {
  return "\n    <li class=\"modal__item in-column\">\n      <div class=\"in-row modal__time\">\n        <span class=\"modal__hour\">".concat(modal.hour, "</span>\n        <button class=\"button__menu button--right button--modal\" onclick=\"openModalDD(").concat(modal.id, ")\">\n          <svg class=\"icon__menu\">\n            <use xlink:href=\"#icon-menu\"></use>\n          </svg>\n        </button>\n        <div class=\"in-column\">\n          <ul class=\"dropdown\" data-value=\"").concat(modal.id, "\">\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--details\" href=\"#\">Detalhes</a></li>\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--reorder\" href=\"#\">Reordenar</a></li>\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--hour\" href=\"#\">Alterar hor\xE1rio</a></li>\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--calendar\" href=\"#\">Alterar data</a></li>\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__text--red dropdown__link--delete\" href=\"#\">Remover ponto</a></li>\n          </ul>\n        </div>\n      </div>\n      <p class=\"modal__local\">").concat(modal.local, "</p>\n      <div class=\"details__rating details__rating--text in-row\">    \n        <svg class=\"icon__star\">\n            <use xlink:href=\"#icon-star\"></use>\n        </svg>\n        <p class=\"details__grade details__grade--bold\">").concat(modal.gradeBold, "</p>\n        <p class=\"details__grade\">").concat(modal.grade, "</p>\n      </div>\n      <div class=\"in-row modal__category\">\n        <p class=\"tag\">natureza</p>\n        <p class=\"tag\">lazer</p>\n      </div>\n      <hr class=\"underline underline--shine underline__modal--margin\" />\n    </li>\n  ");
};

exports.buildModal = buildModal;

var buildDetails = function buildDetails(details) {
  return "\n  <div class=\"details__items in-column\">\n    <div class=\"details__content in-row\">\n      <img class=\"details__image\" src=\"".concat(details.image, "\"/>\n      <div class=\"details__rating--text in-column\">\n          <p class=\"details__title\">").concat(details.local, "</p>\n          <div class=\"details__rating in-row\">\n            <svg class=\"icon__star\">\n              <use xlink:href=\"#icon-star\"></use>\n            </svg>\n            <p class=\"details__grade details__grade--bold\">").concat(details.gradeBold, "</p>\n            <p class=\"details__grade\">").concat(details.grade, "</p>\n          </div>\n          <div class=\"in-row\">\n              <p class=\"tag\">natureza</p>\n              <p class=\"tag\">lazer</p>\n          </div>\n      </div>\n    </div>\n    <div class=\"details__options in-row\">\n        <p class=\"details__text--options details__text--guide\">3 dias</p>\n        <div class=\"in-column details__button--info\">\n          <button class=\"button__menu has-margin-right\" onclick=\"openInfo(").concat(details.id, ")\">\n            <svg class=\"icon__info\">\n              <use xlink:href=\"#icon-info\"></use>\n              </svg>\n            </button>\n          </div>\n        <div class=\"in-column details__button--menu\"> \n          <button class=\"button__menu has-margin-right\" onclick=\"openDetailsDD(").concat(details.id, ")\">\n            <svg class=\"icon__menu\">\n              <use xlink:href=\"#icon-menu\"></use>\n            </svg>\n          </button>\n          <ul class=\"dropdown dropdown__option\" data-details=\"").concat(details.id, "\">\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--check\" href=\"#\">Usar</a></li>\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--save\" href=\"#\">Salvar</a></li>\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--share\" href=\"#\">Compartilhar</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <hr class=\"underline underline--shine\" />\n  ");
};

exports.buildDetails = buildDetails;

var buildInfo = function buildInfo(info) {
  return "\n  <div class=\"info\" data-info=\"".concat(info.id, "\">\n    <div class=\"info__close\" data-closeArea=\"").concat(info.id, "\"></div>\n    <div class=\"info__modal in-column\">\n      <div class=\"in-row\">\n          <p class=\"info__title\">").concat(info.local, "</p>\n          <button class=\"icon__close is-absolute-right\" data-close=\"").concat(info.id, "\"></button>\n      </div>\n      <hr class=\"underline underline--shine underline__info--margin\" />\n      <div class=\"details__rating details__rating--text in-row\">\n        <svg class=\"icon__star\">\n          <use xlink:href=\"#icon-star\"></use>\n        </svg>\n        <p class=\"details__grade details__grade--bold\">").concat(info.gradeBold, "</p>\n        <p class=\"details__grade\">").concat(info.grade, "</p>\n        <p class=\"tag tag__margin\">natureza</p>\n        <p class=\"tag tag__margin\">lazer</p>\n      </div>\n      <p class=\"info__text\">").concat(info.content, "</p> \n      <a class=\"info__link\" href=\"#\">Clique para ver a descri\xE7\xE3o completa...</a>\n      <div class=\"info__gallery in-row\"></div>\n      <div class=\"info__footer in-row\">\n        <button class=\"icon__arrow icon__arrow--left\"></button>\n        <button class=\"icon__arrow icon__arrow--right\"></button>\n      </div>\n    </div>\n  </div>\n  ");
};

exports.buildInfo = buildInfo;

var buildInfoImages = function buildInfoImages(details) {
  return "\n  <img class=\"info__images\" src=\"".concat(details.image, "\">\n  ");
};

exports.buildInfoImages = buildInfoImages;
},{}],"details.js":[function(require,module,exports) {
"use strict";

var _dropdown = require("./js/dropdown.js");

var _modal = require("./data/modal.json");

var _details = require("./data/details.json");

var _info = require("./data/info.json");

var _build = require("./js/build.js");

// HTML Builders
var infoContainer = document.querySelector("#info");

_info.info.forEach(function (item) {
  var infoItems = (0, _build.buildInfo)(item);
  infoContainer.innerHTML = infoContainer.innerHTML + infoItems;
});

var infoGallery = document.querySelector(".info__gallery");

_details.details.forEach(function (item) {
  var infoImages = (0, _build.buildInfoImages)(item);
  infoGallery.innerHTML = infoGallery.innerHTML + infoImages;
});

var modalContainer = document.querySelector(".modal__list");

_modal.modal.forEach(function (item) {
  var modalItems = (0, _build.buildModal)(item);
  modalContainer.innerHTML = modalContainer.innerHTML + modalItems;
});

var detailsContainer = document.querySelector(".details__grid");

_details.details.forEach(function (item) {
  var detailsItems = (0, _build.buildDetails)(item);
  detailsContainer.innerHTML = detailsContainer.innerHTML + detailsItems;
}); // Buttons


document.querySelector('#optionsButton').addEventListener('click', _dropdown.dropDownOptions);
window.addEventListener('click', function (event) {
  if (!event.target.matches('#optionsButton')) {
    var visible = document.getElementById('editDropDown');

    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
}); // document.querySelector(`data-closeArea="${info.id}"`).addEventListener('click', openInfo);
// window.addEventListener('click', function(event) {
//   if (!event.target.matches(`data-closeArea="${info.id}"`)) {
//     var visible = document.querySelector(`[data-info="${info.id}"]`);
//     if (visible.classList.contains('is-visible')) {
//       visible.classList.remove('is-visible');
//     }
//   }
// })
// document.querySelector(`data-close="${info.id}"`).addEventListener('click', openInfo);
// window.addEventListener('click', function(event) {
//   if (!event.target.matches(`data-close="${info.id}"`)) {
//     var visible = document.querySelector(`[data-info="${info.id}"]`);
//     if (visible.classList.contains('is-visible')) {
//       visible.classList.remove('is-visible');
//     }
//   }
// })
// Exec Functions

window.openModalDD = _dropdown.openModalDD;
window.openDetailsDD = _dropdown.openDetailsDD;
window.openInfo = _dropdown.openInfo;
},{"./js/dropdown.js":"js/dropdown.js","./data/modal.json":"data/modal.json","./data/details.json":"data/details.json","./data/info.json":"data/info.json","./js/build.js":"js/build.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42975" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","details.js"], null)
//# sourceMappingURL=/details.9b4b5609.js.map