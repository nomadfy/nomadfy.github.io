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
},{}],"js/dropdown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropDownOptions = dropDownOptions;
exports.dropDownEdit = dropDownEdit;
exports.dropDownDetails = dropDownDetails;

function dropDownOptions() {
  document.getElementById('optionItem').classList.toggle('is-visible');
}

function dropDownEdit() {
  document.getElementById('editDropdown').classList.toggle('is-visible');
}

function dropDownDetails() {
  document.getElementById('detailsDropdown').classList.toggle('is-visible');
}
},{}],"js/popup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popUpInfo = popUpInfo;

function popUpInfo() {
  document.getElementById('infoPopUp').classList.toggle('is-visible');
}
},{}],"data/details.json":[function(require,module,exports) {
module.exports = {
  "details": [{
    "id": "1",
    "hour": "8:00 às 10:00",
    "local": "Jurere Internacional",
    "gradeBold": "4.8",
    "grade": "(1.024 avaliações)"
  }, {
    "id": "2",
    "hour": "8:00 às 15:00",
    "local": "Rio De Janeiro",
    "gradeBold": "4",
    "grade": "(1.500 avaliações)"
  }, {
    "id": "3",
    "hour": "8:00 às 11:00",
    "local": "São Paulo",
    "gradeBold": "4.2",
    "grade": "(1.230 avaliações)"
  }]
};
},{}],"details.js":[function(require,module,exports) {
"use strict";

var _explore = require("./data/explore.json");

var _dropdown = require("./js/dropdown.js");

var _popup = require("./js/popup.js");

var _details = require("./data/details.json");

document.querySelector('#optionsButton').addEventListener('click', _dropdown.dropDownOptions);
window.addEventListener('click', function (event) {
  if (!event.target.matches('#optionsButton')) {
    var visible = document.getElementById('optionItem');

    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
});
document.querySelector('#editButton').addEventListener('click', _dropdown.dropDownEdit);
window.addEventListener('click', function (event) {
  if (!event.target.matches('#editButton')) {
    var visible = document.getElementById('editDropdown');

    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
});
document.querySelector('#infoButton').addEventListener('click', _popup.popUpInfo);
window.addEventListener('click', function (event) {
  if (!event.target.matches('#closeArea')) {
    var visible = document.getElementById('#info');

    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
});
document.querySelector('#closeArea').addEventListener('click', _popup.popUpInfo);
window.addEventListener('click', function (event) {
  if (!event.target.matches('#closeArea')) {
    var visible = document.getElementById('#info');

    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
});
document.querySelector('#close').addEventListener('click', _popup.popUpInfo);
window.addEventListener('click', function (event) {
  if (!event.target.matches('#close')) {
    var visible = document.getElementById('#info');

    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
});
var containerInfo = document.querySelector(".info__gallery");

var buildInfo = function buildInfo(destinations) {
  return "\n  <img class=\"info__images\" src=\"".concat(destinations.image, "\">\n  ");
};

_explore.destinations.forEach(function (item) {
  var info = buildInfo(item);
  containerInfo.innerHTML = containerInfo.innerHTML + info;
});

var modalContainer = document.querySelector(".modal__list");

var buildModal = function buildModal(details) {
  return "\n    <li class=\"modal__list--item in-column\">\n      <div class=\"in-row modal__list--time\">\n        <span class=\"modal__hour\">".concat(details.hour, "</span>\n        <button class=\"button__menu button--right button--modal\" onclick=\"buttonDropDown").concat(details.id, "\">\n          <svg class=\"icon__menu\">\n            <use xlink:href=\"#icon-menu\"></use>\n          </svg>\n        </button>\n      </div>\n      <div class=\"in-column\">\n        <ul class=\"dropdown\" data-Dropdown").concat(details.id, "\">\n          <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--details\" href=\"#\">Detalhes</a></li>\n          <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--reorder\" href=\"#\">Reordenar</a></li>\n          <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--hour\" href=\"#\">Alterar hor\xE1rio</a></li>\n          <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__link--calendar\" href=\"#\">Alterar data</a></li>\n          <li class=\"dropdown__item\"><a class=\"dropdown__text dropdown__text--red dropdown__link--delete\" href=\"#\">Remover ponto</a></li>\n        </ul>\n      </div>\n      <p class=\"modal__local\">").concat(details.local, "</p>\n      <div class=\"details__rating details__rating--text in-row\">    \n        <svg class=\"icon__star\">\n            <use xlink:href=\"#icon-star\"></use>\n        </svg>\n        <p class=\"details__grade details__grade--bold\">").concat(details.gradeBold, "</p>\n        <p class=\"details__grade\">").concat(details.grade, "</p>\n      </div>\n      <div class=\"in-row modal__category\">\n        <p class=\"tag\">natureza</p>\n        <p class=\"tag\">lazer</p>\n      </div>\n      <hr class=\"underline underline--shine underline__modal--margin\" />\n    </li>\n  ");
};

_details.details.forEach(function (item) {
  var detailsItems = buildModal(item);
  modalContainer.innerHTML = modalContainer.innerHTML + detailsItems;
});
},{"./data/explore.json":"data/explore.json","./js/dropdown.js":"js/dropdown.js","./js/popup.js":"js/popup.js","./data/details.json":"data/details.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "34185" + '/');

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