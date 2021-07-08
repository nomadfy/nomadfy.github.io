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
})({"data/explore.json":[function(require,module,exports) {
module.exports = {
  "guide": [{
    "image": "roteiro-mariana.png",
    "title": "7 cachoeiras em 7 dias",
    "city": "Mariana / MG"
  }, {
    "image": "roteiro-sao-paulo.png",
    "title": "O melhor da capital em 5 dias",
    "city": "São Paulo / SP"
  }, {
    "image": "roteiro-rio-de-janeiro.png",
    "title": "Final de semana com a família",
    "city": "Rio de Janeiro / RJ"
  }, {
    "image": "roteiro-salvador.png",
    "title": "Pra quem gosta de história e arte",
    "city": "Salvador / BA"
  }, {
    "image": "roteiro-manaus.png",
    "title": "Se conectando com a natureza",
    "city": "Manaus / AM"
  }, {
    "image": "roteiro-gramado.png",
    "title": "Final de semana romântico",
    "city": "Gramado / RS"
  }, {
    "image": "roteiro-manaus.png",
    "title": "Se conectando com a natureza",
    "city": "Manaus / AM"
  }, {
    "image": "roteiro-manaus.png",
    "title": "Se conectando com a natureza",
    "city": "Manaus / AM"
  }, {
    "image": "roteiro-manaus.png",
    "title": "Se conectando com a natureza",
    "city": "Manaus / AM"
  }],
  "destinations": [{
    "image": "destinos-sao-paulo.png",
    "city": "São Paulo / SP"
  }, {
    "image": "destinos-rio-de-janeiro.png",
    "city": "Rio de Janeiro / RJ"
  }, {
    "image": "destinos-maragogi.png",
    "city": "Maragogi / AL"
  }, {
    "image": "destinos-fortaleza.png",
    "city": "Fortaleza / CE"
  }, {
    "image": "destinos-gramado.png",
    "city": "Gramados / RS"
  }, {
    "image": "destinos-florianopolis.png",
    "city": "Florianópolis / SC"
  }]
};
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
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _explore = require("./data/explore.json");

var _password = require("./js/password.js");

var _modal = require("./js/modal.js");

var containerGuide = document.querySelector(".explore__components");
var containerDest = document.querySelector(".explore__components--destination");
document.getElementById('modalLogin').addEventListener('click', _modal.modalLogin);
document.getElementById('closeLogin').addEventListener('click', _modal.closeLogin);
document.getElementById('showPassword').addEventListener('click', _password.showPassword);

var buildGuide = function buildGuide(guide) {
  return "\n  <a class=\"explore__card\" href=\"/details/index.html\">\n    <img class=\"explore__image\" src=\"".concat(guide.image, "\">\n    <div class=\"explore__linear\">\n      <h2 class=\"explore__subtitles explore__subtitles--guide\">").concat(guide.title, "</h3>\n      <div class=\"explore__location\">\n        <svg class=\"explore__icon\">\n          <use xlink:href=\"#icon-location\"></use>\n        </svg>\n        <h3 class=\"explore__city\" data-city=\"\">").concat(guide.city, "</p>\n      </div>\n    </div>\n  </a>\n  ");
};

var buildDestination = function buildDestination(destinations) {
  return "\n  <a class=\"explore__card\" href=\"/details/index.html\">\n    <img class=\"explore__image\" src=\"".concat(destinations.image, "\">\n    <div class=\"explore__linear\">\n      <h3 class=\"explore__subtitles explore__subtitles--dest\">").concat(destinations.city, "</h3>\n      <p class=\"explore__days\"> 3 dias </p>\n    </div>\n  </a>\n");
};

_explore.destinations.forEach(function (item) {
  var destination = buildDestination(item);
  containerDest.innerHTML = containerDest.innerHTML + destination;
});

_explore.guide.forEach(function (item) {
  var guide = buildGuide(item);
  containerGuide.innerHTML = containerGuide.innerHTML + guide;
}); // // Explore Scroll
// const slider = document.querySelector(".explore__components")
// let isDown = false;
// let startX;
// let scrollLeft;
// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('grabbing')
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// })
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('grabbing')
// })
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('grabbing')
// })
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = x - startX;
//   slider.scrollLeft = scrollLeft - walk;
// })
// // Destination Scroll
//   const secondSlider = document.querySelector(".explore__components--destination")
//   secondSlider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     secondSlider.classList.add('grabbing')
//     startX = e.pageX - secondSlider.offsetLeft;
//     scrollLeft = secondSlider.scrollLeft;
//   })
//   secondSlider.addEventListener('mouseleave', () => {
//     isDown = false;
//     secondSlider.classList.remove('grabbing')
//   })
//   secondSlider.addEventListener('mouseup', () => {
//     isDown = false;
//     secondSlider.classList.remove('grabbing')
//   })
//   secondSlider.addEventListener('mousemove', (e) => {
//     if(!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - secondSlider.offsetLeft;
//     const walk = x - startX;
//     secondSlider.scrollLeft = scrollLeft - walk;
//   })


window.showPassword = _password.showPassword;
},{"./data/explore.json":"data/explore.json","./js/password.js":"js/password.js","./js/modal.js":"js/modal.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map