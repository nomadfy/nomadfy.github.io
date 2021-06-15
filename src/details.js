import { timeline } from "./data/timeline.json";
import { details } from "./data/details.json";
import { modal } from "./data/modal.json";
import { openMainDropdown, openUserDropdown, openRoadmapDropdown } from "./js/dropdown.js";
import { openModalinfo, buildModal, buildModalImages } from "./js/modal.js";
import { buildTimeline } from "./js/timeline.js";
import { buildDetailsList } from "./js/list.js";
import { activeGuide, activeSpots } from "./js/active.js";

// HTML Builders

const modalContainer = document.querySelector("#modal")
modal.forEach((item) => {
  const modalItems = buildModal(item);

  modalContainer.innerHTML = modalContainer.innerHTML + modalItems
})

const modalGallery = document.querySelector(".modal__gallery")
details.forEach((item) => {
  const modalImages = buildModalImages(item);
  
  modalGallery.innerHTML = modalGallery.innerHTML + modalImages
})

const timelineContainer = document.querySelector(".timeline__list")
timeline.forEach((item) => {
  const timelineItems = buildTimeline(item);
  
  timelineContainer.innerHTML = timelineContainer.innerHTML + timelineItems
})

const detailsContainer = document.querySelector(".details__grid")
details.forEach((item) => {
  const detailsItems = buildDetailsList(item);

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

document.querySelector('#mainDropdownButton').addEventListener('click', openMainDropdown);
window.addEventListener('click', function(event) {
  if (!event.target.matches('#mainDropdownButton')) {
    var visible = document.getElementById('mainDropdown');
    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
})

document.querySelector('#roteiros').addEventListener('click', activeGuide);
document.querySelector('#pontosTuristicos').addEventListener('click', activeSpots);

// Dropdown Close
// document.querySelectorAll('[data-dropdown-click]').addEventListener('click', openModalinfo);
// window.addEventListener('click', function(event) {
//   if (!event.target.matches('[data-dropdown-click]')) {
//     var visible = document.querySelectorAll('[data-dropdown-info]');
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
