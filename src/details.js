import { dropDownOptions, openModalDD, openDetailsDD, openInfo } from "./js/dropdown.js";
import { modal } from "./data/modal.json"
import { details } from "./data/details.json"
import { info } from "./data/info.json"
import { buildModal, buildDetails, buildInfo, buildInfoImages } from "./js/build.js"

// HTML Builders

const infoContainer = document.querySelector("#info")
info.forEach((item) => {
  const infoItems = buildInfo(item);

  infoContainer.innerHTML = infoContainer.innerHTML + infoItems
})

const infoGallery = document.querySelector(".info__gallery")
details.forEach((item) => {
  const infoImages = buildInfoImages(item);
  
  infoGallery.innerHTML = infoGallery.innerHTML + infoImages
})

const modalContainer = document.querySelector(".modal__list")
modal.forEach((item) => {
  const modalItems = buildModal(item);
  
  modalContainer.innerHTML = modalContainer.innerHTML + modalItems
})

const detailsContainer = document.querySelector(".details__grid")
details.forEach((item) => {
  const detailsItems = buildDetails(item);

  detailsContainer.innerHTML = detailsContainer.innerHTML + detailsItems
})

// Buttons

document.querySelector('#optionsButton').addEventListener('click', dropDownOptions);
window.addEventListener('click', function(event) {
  if (!event.target.matches('#optionsButton')) {
    var visible = document.getElementById('editDropDown');
    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
})

// document.querySelector(`data-closeArea="${info.id}"`).addEventListener('click', openInfo);
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

window.openModalDD = openModalDD
window.openDetailsDD = openDetailsDD
window.openInfo = openInfo
