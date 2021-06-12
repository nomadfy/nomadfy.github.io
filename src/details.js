import { openMainDropdown, openUserDropdown, openRoadmapDropdown, openModalinfo } from "./js/dropdown.js";
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

// Main Dropdown Click
document.querySelector('#mainDropdownButton').addEventListener('click', openMainDropdown);
window.addEventListener('click', function(event) {
  if (!event.target.matches('#mainDropdownButton')) {
    var visible = document.getElementById('mainDropdown');
    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
})

// Dropdown Close
// document.querySelector(`[data-dropdown-click="${info.id}"]`).addEventListener('click', openModalinfo);
// window.addEventListener('click', function(event) {
//   if (!event.target.matches(`[data-dropdown-click="${info.id}"]`)) {
//     var visible = document.querySelector(`[data-dropdown-info="${info.id}"]`);
//     if (visible.classList.contains('is-visible')) {
//       visible.classList.remove('is-visible');
//     }
//   }
// })

// // Modal Click
// document.querySelector(`[data-close="${info.id}"]`).addEventListener('click', openModalinfo);
// window.addEventListener('click', function(event) {
//   if (!event.target.matches(`[data-close="${info.id}"]`)) {
//     var visible = document.querySelector(`[data-modal-info="${info.id}"]`);
//     if (visible.classList.contains('is-visible')) {
//       visible.classList.remove('is-visible');
//     }
//   }
// })

// Exec Functions

window.openUserDropdown = openUserDropdown
window.openRoadmapDropdown = openRoadmapDropdown
window.openModalinfo = openModalinfo
