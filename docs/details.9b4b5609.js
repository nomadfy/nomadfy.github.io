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
})({"data/timeline.json":[function(require,module,exports) {
module.exports = {
  "timeline": [{
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
    "image": "destinos-florianopolis.png"
  }, {
    "id": "2",
    "hour": "8:00 às 15:00",
    "local": "Rio De Janeiro",
    "gradeBold": "4",
    "grade": "(1.500 avaliações)",
    "image": "destinos-florianopolis.png"
  }, {
    "id": "3",
    "hour": "8:00 às 11:00",
    "local": "São Paulo",
    "gradeBold": "4.2",
    "grade": "(1.230 avaliações)",
    "image": "destinos-florianopolis.png"
  }, {
    "id": "4",
    "hour": "8:00 às 10:00",
    "local": "Jurere Internacional",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "image": "destinos-florianopolis.png"
  }, {
    "id": "5",
    "hour": "8:00 às 15:00",
    "local": "Rio De Janeiro",
    "gradeBold": "4",
    "grade": "(1.500 avaliações)",
    "image": "destinos-florianopolis.png"
  }, {
    "id": "6",
    "hour": "8:00 às 11:00",
    "local": "São Paulo",
    "gradeBold": "4.2",
    "grade": "(1.230 avaliações)",
    "image": "destinos-florianopolis.png"
  }, {
    "id": "7",
    "hour": "8:00 às 10:00",
    "local": "Jurere Internacional",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "image": "destinos-florianopolis.png"
  }, {
    "id": "8",
    "hour": "8:00 às 15:00",
    "local": "Rio De Janeiro",
    "gradeBold": "4",
    "grade": "(1.500 avaliações)",
    "image": "destinos-florianopolis.png"
  }, {
    "id": "9",
    "hour": "8:00 às 11:00",
    "local": "São Paulo",
    "gradeBold": "4.2",
    "grade": "(1.230 avaliações)",
    "image": "destinos-florianopolis.png"
  }, {
    "id": "10",
    "hour": "8:00 às 10:00",
    "local": "Jurere Internacional",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)",
    "image": "destinos-florianopolis.png"
  }, {
    "id": "11",
    "hour": "8:00 às 15:00",
    "local": "Rio De Janeiro",
    "gradeBold": "4",
    "grade": "(1.500 avaliações)",
    "image": "destinos-florianopolis.png"
  }, {
    "id": "12",
    "hour": "8:00 às 11:00",
    "local": "São Paulo",
    "gradeBold": "4.2",
    "grade": "(1.230 avaliações)",
    "image": "destinos-florianopolis.png"
  }]
};
},{}],"data/modal.json":[function(require,module,exports) {
module.exports = {
  "modal": [{
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
},{}],"js/dropdown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openMainDropdown = openMainDropdown;
exports.openRoadmapDropdown = exports.openTimeLineModal = exports.openUserDropdown = void 0;
var openedItem;

function openMainDropdown() {
  document.getElementById('mainDropdown').classList.toggle('is-visible');
}

var openUserDropdown = function openUserDropdown(id) {
  openedItem = document.querySelector("[data-dropdown-info=\"".concat(id, "\"]"));
  openedItem.classList.toggle('is-visible');
};

exports.openUserDropdown = openUserDropdown;

var openTimeLineModal = function openTimeLineModal(id) {
  var t = document.querySelector("[data-dropdown-info=\"".concat(id, "]")).classList.toggle('is-visible');
};

exports.openTimeLineModal = openTimeLineModal;

var openRoadmapDropdown = function openRoadmapDropdown(id) {
  var t = document.querySelector("[data-roadmap-info=\"".concat(id, "\"]")).classList.toggle('is-visible');
  var i = document.querySelector("[data-roadmap-info=\"".concat(id, "\"]")).setAttribute('data', 'remove');
}; // document.addEventListener('click', function(event) {
//   var isClickInside = openedItem && openedItem.contains(event.target);
//   console.log(isClickInside)
//   if (!isClickInside) {
//     openedItem.classList.toggle('is-visible');
//   }
// });


exports.openRoadmapDropdown = openRoadmapDropdown;
},{}],"js/modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalLogin = modalLogin;
exports.closeLogin = closeLogin;
exports.buildGuideModal = exports.openModalGuide = exports.buildSpotsModalImages = exports.buildSpotsModal = exports.openModalinfo = void 0;

var openModalinfo = function openModalinfo(id) {
  document.querySelector("[data-modal-info=\"".concat(id, "\"]")).classList.toggle('is-visible');
};

exports.openModalinfo = openModalinfo;

var buildSpotsModal = function buildSpotsModal(modal) {
  return "\n  <div class=\"modal\" data-modal-info=\"".concat(modal.id, "\">\n    <div class=\"modal__close\" id=\"closeArea\"></div>\n    <div class=\"modal_container in-column\">\n      <div class=\"in-row\">\n        <p class=\"modal__title\">").concat(modal.local, "</p>\n        <button class=\"icon__close is-absolute-right\" data-close=\"").concat(modal.id, "\"></button>\n      </div>\n      <hr class=\"underline underline--shine underline--modal--margin\" />\n      <div class=\"details__rating details__rating--text in-row\">\n        <svg class=\"icon__star\">\n          <use xlink:href=\"#icon-star\"></use>\n        </svg>\n        <p class=\"details__grade details__grade--bold\">").concat(modal.gradeBold, "</p>\n        <p class=\"details__grade\">").concat(modal.grade, "</p>\n        <p class=\"tag tag__margin\">natureza</p>\n        <p class=\"tag tag__margin\">lazer</p>\n      </div>\n      <p class=\"modal__text\">").concat(modal.content, "</p> \n      <a class=\"modal__link\" href=\"#\">Clique para ver a descri\xE7\xE3o completa...</a>\n      <div class=\"modal__gallery in-row\"></div>\n      <div class=\"modal__footer in-row\">\n        <button class=\"icon__arrow icon__arrow--left\"></button>\n        <button class=\"icon__arrow icon__arrow--right\"></button>\n      </div>\n    </div>\n  </div>\n  ");
};

exports.buildSpotsModal = buildSpotsModal;

var buildSpotsModalImages = function buildSpotsModalImages(details) {
  return "\n  <img class=\"modal__images\" src=\"".concat(details.image, "\">\n  ");
};

exports.buildSpotsModalImages = buildSpotsModalImages;

var openModalGuide = function openModalGuide(id) {
  document.querySelector("data-modal-info=\"".concat(id, "\"")).classList.toggle('is-visible');
};

exports.openModalGuide = openModalGuide;

var buildGuideModal = function buildGuideModal(modal) {
  return "\n<div class=\"modal\" data-modal-info=\"".concat(modal.id, "\">\n<div class=\"modal__close\" data-close=").concat(modal.id, " onclick=\"closeModal(").concat(modal.id, ")\"></div>\n<div class=\"in-row\">\n  <div class=\"modal__container in-column\">\n    <div class=\"in-row\">\n      <p class=\"modal__title\">").concat(modal.local, "</p>\n      <button class=\"icon__close is-absolute-right\" data-close=\"").concat(modal.id, "\"></button>\n    </div>\n    <hr class=\"underline underline--shine underline__modal--margin\" />\n    <div class=\"in-row\">\n      <div class=\"modal__spots in-column\">\n        <div class=\"details__rating--text in-row\">\n          <svg class=\"icon__star\">\n            <use xlink:href=\"#icon-star\"></use>\n          </svg>\n          <p class=\"details__grade details__grade--bold\">").concat(modal.gradeBold, "</p>\n          <p class=\"details__grade details__grade--margin\">").concat(modal.grade, "</p>\n          <p class=\"tag tag__margin\">natureza</p>\n          <p class=\"tag tag__margin\">lazer</p>\n        </div>\n        <div class=\"modal__select in-row\">\n          <p>Dia<select class=\"select\" name=\"days\">\n          <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n          <option value=\"4\">4</option>\n          <option value=\"5\">5</option>\n          <option value=\"6\">6</option>\n          </select></p><span>de 6</span>\n        </div>\n        <ul class=\"modal__list in-column\">\n          <li class=\"modal__item\">Ponto turistico 1</li>\n          <li class=\"modal__item\">Ponto turistico 2</li>\n          <li class=\"modal__item\">Ponto turistico 3</li>\n          <li class=\"modal__item\">Ponto turistico 4</li>\n          <li class=\"modal__item\">Ponto turistico 5</li>\n          <li class=\"modal__item\">Ponto turistico 6</li>\n        </ul>\n      </div>\n      <div class=\"modal__content in-column\">\n        <div class=\"details__rating details__rating--text in-row\">\n          <svg class=\"icon__star\">\n            <use xlink:href=\"#icon-clock\"></use>\n          </svg>\n          <p class=\"details__grade details__grade--margin\"> 11:00 \xE0s 15:00 </p>\n          <svg class=\"icon__star\">\n            <use xlink:href=\"#icon-star\"></use>\n          </svg>\n          <p class=\"details__grade details__grade--bold\">").concat(modal.gradeBold, "</p>\n          <p class=\"details__grade details__grade--margin\">").concat(modal.grade, "</p>\n          <p class=\"tag tag__margin\">natureza</p>\n          <p class=\"tag tag__margin\">lazer</p>\n        </div>\n        <p class=\"modal__text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At diam in mauris varius maecenas adipiscing. Faucibus erat nisl vel, consequat aliquam vehicula neque, elementum. Non aliquam neque pharetra lacus, et elementum. Posuere ante tristique est faucibus pharetra. Turpis quisque arcu amet libero at dolor sit ipsum pellentesque.</p><a class=\"modal__link\" href=\"#\">Clique para ver a descri&ccedil;&atilde;o completa...</a>\n        <div class=\"modal__gallery in-row\"></div>\n        <div class=\"modal__footer in-row\">\n          <button class=\"icon__arrow icon__arrow--left\"></button>\n          <button class=\"icon__arrow icon__arrow--right\"></button>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n</div>\n  ");
};

exports.buildGuideModal = buildGuideModal;

function modalLogin() {
  document.getElementById('login').classList.toggle('is-visible');
  document.getElementById('closeLogin').classList.toggle('is-visible');
}

function closeLogin() {
  document.getElementById('login').classList.remove('is-visible');
  document.getElementById('closeLogin').classList.remove('is-visible');
}
},{}],"js/timeline.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildTimeline = void 0;

var buildTimeline = function buildTimeline(modal) {
  return "\n    <li class=\"timeline__item in-column\">\n      <div class=\"in-row timeline__time\">\n        <span class=\"timeline__hour\">".concat(modal.hour, "</span>\n        <button class=\"button__timeline button__menu button--right button--modal\" data-dropdown-click=\"").concat(modal.id, "\" onclick=\"openUserDropdown(").concat(modal.id, ", event)\">\n          <svg class=\"icon__menu\">\n            <use xlink:href=\"#icon-menu\"></use>\n          </svg>\n        </button>\n        <div class=\"in-column\">\n          <ul class=\"dropdown dropdown--margin\" data-dropdown-info=\"").concat(modal.id, "\">\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--details\" href=\"#\">Detalhes</a></li>\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--reorder\" href=\"#\">Reordenar</a></li>\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--hour\" href=\"#\">Alterar hor\xE1rio</a></li>\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--calendar\" href=\"#\">Alterar data</a></li>\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__text--red dropdown__link--delete\" href=\"#\">Remover ponto</a></li>\n          </ul>\n        </div>\n      </div>\n      <p class=\"timeline__local\">").concat(modal.local, "</p>\n      <div class=\"details__rating details__rating--text in-row\">    \n        <svg class=\"icon__star\">\n            <use xlink:href=\"#icon-star\"></use>\n        </svg>\n        <p class=\"details__grade details__grade--bold\">").concat(modal.gradeBold, "</p>\n        <p class=\"details__grade\">").concat(modal.grade, "</p>\n      </div>\n      <div class=\"in-row timeline__category\">\n        <p class=\"tag\">natureza</p>\n        <p class=\"tag\">lazer</p>\n      </div>\n      <hr class=\"underline underline--shine underline__timeline--margin\" />\n    </li>\n  ");
};

exports.buildTimeline = buildTimeline;
},{}],"js/list.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildSpotsList = exports.buildDetailsList = void 0;

var buildDetailsList = function buildDetailsList(details) {
  return "\n  <div id=\"roteiros\" class=\"details__items in-column\">\n    <div class=\"details__content in-row\">\n      <img class=\"details__image\" src=\"".concat(details.image, "\"/>\n      <div class=\"details__rating--text in-column\">\n          <p class=\"details__title\">").concat(details.local, "</p>\n          <div class=\"details__rating in-row\">\n            <svg class=\"icon__star\">\n              <use xlink:href=\"#icon-star\"></use>\n            </svg>\n            <p class=\"details__grade details__grade--bold\">").concat(details.gradeBold, "</p>\n            <p class=\"details__grade\">").concat(details.grade, "</p>\n          </div>\n          <div class=\"in-row\">\n              <p class=\"tag\">natureza</p>\n              <p class=\"tag\">lazer</p>\n          </div>\n      </div>\n    </div>\n    <div class=\"details__options in-row\">\n        <p class=\"details__text--options details__text--guide\">3 dias</p>\n        <div class=\"in-column details__button--info\">\n          <button class=\"button__menu has-margin-right\" onclick=\"openModalinfo(").concat(details.id, ")\">\n            <svg class=\"icon__info\">\n              <use xlink:href=\"#icon-info\"></use>\n              </svg>\n          </button>\n        </div> \n        <div class=\"in-column details__button--menu\"> \n          <button class=\"button__menu has-margin-right\" onclick=\"openRoadmapDropdown(").concat(details.id, ")\">\n            <svg class=\"icon__menu\">\n              <use xlink:href=\"#icon-menu\"></use>\n            </svg>\n          </button>\n          <ul class=\"dropdown dropdown__option\" data-roadmap-info=\"").concat(details.id, "\">\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--check\" href=\"#\">Usar</a></li>\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--save\" href=\"#\">Salvar</a></li>\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--share\" href=\"#\">Compartilhar</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <hr class=\"underline underline--shine\" />\n  ");
};

exports.buildDetailsList = buildDetailsList;

var buildSpotsList = function buildSpotsList(details) {
  return "\n  <div id=\"pontosTuristicos\" class=\"details__items in-column\">\n    <div class=\"details__content in-row\">\n      <img class=\"details__image\" src=\"".concat(details.image, "\"/>\n      <div class=\"details__rating--text in-column\">\n          <p class=\"details__title\">").concat(details.local, "</p>\n          <div class=\"details__rating in-row\">\n            <svg class=\"icon__star\">\n              <use xlink:href=\"#icon-star\"></use>\n            </svg>\n            <p class=\"details__grade details__grade--bold\">").concat(details.gradeBold, "</p>\n            <p class=\"details__grade\">").concat(details.grade, "</p>\n          </div>\n          <div class=\"in-row\">\n              <p class=\"tag\">natureza</p>\n              <p class=\"tag\">lazer</p>\n          </div>\n      </div>\n    </div>\n    <div class=\"details__options in-row\">\n        <p class=\"details__text--options details__text--guide\">3 dias</p>\n        <div class=\"in-column details__button--info\">\n          <button class=\"button__menu has-margin-right\" onclick=\"openModalinfo(").concat(details.id, ")\">\n            <svg class=\"icon__info\">\n              <use xlink:href=\"#icon-info\"></use>\n              </svg>\n          </button>\n        </div> \n        <div class=\"in-column details__button--menu\"> \n          <button class=\"button__menu has-margin-right\" onclick=\"openRoadmapDropdown(").concat(details.id, ")\">\n            <svg class=\"icon__menu\">\n              <use xlink:href=\"#icon-menu\"></use>\n            </svg>\n          </button>\n          <ul class=\"dropdown dropdown__option\" data-roadmap-info=\"").concat(details.id, "\">\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--check\" href=\"#\">Usar</a></li>\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--save\" href=\"#\">Salvar</a></li>\n            <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--share\" href=\"#\">Compartilhar</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <hr class=\"underline underline--shine\" />\n  ");
};

exports.buildSpotsList = buildSpotsList;
},{}],"js/active.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activeSpots = activeSpots;
exports.activeGuide = activeGuide;
var spots = document.getElementById('pontosTuristicos');
var guide = document.getElementById('roteiros');

function activeSpots() {
  document.getElementById('pontosTuristicos').classList.toggle('is-showing');

  if (guide.className == 'is-showing') {
    document.getElementById('roteiros').classList.toggle('is-hidden');
  }
}

function activeGuide() {
  document.getElementById('roteiros').classList.toggle('is-showing');

  if (spots.className == 'is-showing') {
    document.getElementById('pontosTuristicos').classList.remove('is-showing');
  }
}
},{}],"js/collapse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collapseButton = collapseButton;

function collapseButton() {
  document.querySelector('.timeline').classList.toggle('is-showing');
}
},{}],"js/password.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showPassword = showPassword;

function showPassword() {
  var password = document.getElementById('password');

  if (password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
}
},{}],"details.js":[function(require,module,exports) {
"use strict";

var _timeline = require("./data/timeline.json");

var _details = require("./data/details.json");

var _modal = require("./data/modal.json");

var _dropdown = require("./js/dropdown.js");

var _modal2 = require("./js/modal.js");

var _timeline2 = require("./js/timeline.js");

var _list = require("./js/list.js");

var _active = require("./js/active.js");

var _collapse = require("./js/collapse.js");

var _password = require("./js/password.js");

// HTML Builders
var timelineContainer = document.querySelector(".timeline__list");

_timeline.timeline.forEach(function (item) {
  var timelineItems = (0, _timeline2.buildTimeline)(item);
  timelineContainer.innerHTML = timelineContainer.innerHTML + timelineItems;
});

var detailsContainer = document.querySelector(".details__grid");

_details.details.forEach(function (item) {
  var detailsItems = (0, _list.buildDetailsList)(item);
  detailsContainer.innerHTML = detailsContainer.innerHTML + detailsItems;
});

var spotsContainer = document.querySelector(".details__spots");

_details.details.forEach(function (item) {
  var spotsItems = (0, _list.buildSpotsList)(item);
  spotsContainer.innerHTML = spotsContainer.innerHTML + spotsItems;
});

var modalGuide = document.querySelector(".modal__guide");

_details.details.forEach(function (item) {
  var modalItem = (0, _modal2.buildGuideModal)(item);
  modalGuide.innerHTML = modalGuide.innerHTML + modalItem;
}); // Click Events


document.getElementById('modalLogin').addEventListener('click', _modal2.modalLogin);
document.getElementById('closeLogin').addEventListener('click', _modal2.closeLogin);
document.getElementById('showPassword').addEventListener('click', _password.showPassword);
document.querySelector('#activeGuide').addEventListener('click', _active.activeGuide);
document.querySelector('#activeSpots').addEventListener('click', _active.activeSpots);
document.querySelector('#collapseButton').addEventListener('click', _collapse.collapseButton);
document.querySelector('#closeIcon').addEventListener('click', _modal2.closeLogin);
document.querySelector('#mainDropdownButton').addEventListener('click', _dropdown.openMainDropdown);
window.addEventListener('click', function (event) {
  if (!event.target.matches('#mainDropdownButton')) {
    var visible = document.getElementById('mainDropdown');

    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
});
document.querySelector(".modal__close").addEventListener('click', _modal2.closeModalInfo); // Dropdown Close

var buttons = document.querySelectorAll('.remove');
var dropdowns = document.querySelectorAll('.dropdown');
buttons.forEach(function (button) {
  return button.addEventListener('click', function (e) {
    var targetDropdown = e.target.nextElementSibling;
    Array.from(dropdowns).filter(function (dd) {
      return dd != targetDropdown;
    }).forEach(function (dd) {
      return dd.classList.remove('is-visible');
    });
    targetDropdown.classList.toggle('is-visible');
  });
});
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('dropdown') || e.target.tagName === 'BUTTON') return;
  dropdowns.forEach(function (dd) {
    return dd.classList.remove('is-visible');
  });
  dropdowns.forEach(function (dd) {
    return dd.removeAttribute('data');
  });
}); // Modal Close 

var closeModal = function closeModal(id) {
  var modal = document.querySelector("[data-modal-info=\"".concat(id, "\"]"));
  var close = document.querySelector("[data-close=\"".concat(id, "\"]"));

  if (modal.classList.contains('is-visible')) {
    close.classList.remove('is-visible');
    modal.classList.remove('is-visible');
  }
}; // Exec Functions


window.openUserDropdown = _dropdown.openUserDropdown;
window.openRoadmapDropdown = _dropdown.openRoadmapDropdown;
window.openModalinfo = _modal2.openModalinfo;
window.showPassword = _password.showPassword;
window.openTimeLineModal = _dropdown.openTimeLineModal;
window.closeModal = closeModal;
},{"./data/timeline.json":"data/timeline.json","./data/details.json":"data/details.json","./data/modal.json":"data/modal.json","./js/dropdown.js":"js/dropdown.js","./js/modal.js":"js/modal.js","./js/timeline.js":"js/timeline.js","./js/list.js":"js/list.js","./js/active.js":"js/active.js","./js/collapse.js":"js/collapse.js","./js/password.js":"js/password.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42949" + '/');

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