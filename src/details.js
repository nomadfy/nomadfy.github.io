import { timeline } from "./data/timeline.json";
import { details } from "./data/details.json";
import { modal } from "./data/modal.json";
import { openMainDropdown, openUserDropdown, openRoadmapDropdown } from "./js/dropdown.js";
import { openModalinfo, buildSpotsModal, buildSpotsModalImages, modalLogin, closeLogin } from "./js/modal.js";
import { buildTimeline } from "./js/timeline.js";
import { buildDetailsList, buildSpotsList } from "./js/list.js";
import { activeGuide, activeSpots } from "./js/active.js";
import { collapseButton } from "./js/collapse.js"
import { showPassword } from "./js/password.js"
// HTML Builders

// const modalContainer = document.querySelector("#modalSpots")
// modal.forEach((item) => {
//   const modalItems = buildSpotsModal(item);

//   modalContainer.innerHTML = modalContainer.innerHTML + modalItems
// })

// const modalGallery = document.querySelector(".modal__gallery")
// details.forEach((item) => {
//   const modalImages = buildSpotsModalImages(item);
  
//   modalGallery.innerHTML = modalGallery.innerHTML + modalImages
// })

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

const spotsContainer = document.querySelector(".details__spots")
details.forEach((item) =>{
  const spotsItems = buildSpotsList(item);

  spotsContainer.innerHTML = spotsContainer.innerHTML + spotsItems
})

// Click Events

document.getElementById('modalLogin').addEventListener('click', modalLogin);

document.getElementById('closeLogin').addEventListener('click', closeLogin);

document.getElementById('showPassword').addEventListener('click', showPassword);


document.querySelector('#mainDropdownButton').addEventListener('click', openMainDropdown);
window.addEventListener('click', function(event) {
  if (!event.target.matches('#mainDropdownButton')) {
    var visible = document.getElementById('mainDropdown');
    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
})

document.querySelector('#activeGuide').addEventListener('click', activeGuide);
document.querySelector('#activeSpots').addEventListener('click', activeSpots);
document.querySelector('#collapseButton').addEventListener('click', collapseButton);

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
  window.showPassword = showPassword
