parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SCVz":[function(require,module,exports) {
"use strict";function e(){document.getElementById("optionItem").classList.toggle("is-visible")}function t(){document.getElementById("editDropdown").classList.toggle("is-visible")}function o(){document.getElementById("detailsDropdown").classList.toggle("is-visible")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.dropDownOptions=e,exports.dropDownEdit=t,exports.dropDownDetails=o;
},{}],"B0UA":[function(require,module,exports) {
"use strict";var t=require("./js/dropdown.js");document.querySelector("#optionsButton").addEventListener("click",t.dropDownOptions),window.addEventListener("click",function(t){if(!t.target.matches("#optionsButton")){var e=document.getElementById("optionItem");e.classList.contains("is-visible")&&e.classList.remove("is-visible")}}),document.querySelector("#editButton").addEventListener("click",t.dropDownEdit),window.addEventListener("click",function(t){if(!t.target.matches("#editButton")){var e=document.getElementById("editDropdown");e.classList.contains("is-visible")&&e.classList.remove("is-visible")}}),document.querySelector("#detailsButton").addEventListener("click",t.dropDownDetails),window.addEventListener("click",function(t){if(!t.target.matches("#detailsButton")){var e=document.getElementById("detailsDropdown");e.classList.contains("is-visible")&&e.classList.remove("is-visible")}});
},{"./js/dropdown.js":"SCVz"}]},{},["B0UA"], null)
//# sourceMappingURL=results.e038d6dd.js.map