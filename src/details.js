// Data
import { timeline } from "./data/timeline.json";
import { details } from "./data/details.json";
// DropDown
import { openMainDropdown, openUserDropdown, openRoadmapDropdown, openTimeLineModal, } from "./js/dropdown.js";
// Modal
import { openGuideModal, openSpotsModal, buildSpotsModal, buildGuideModal, modalLogin, closeLogin, closeModalInfo, buildModalImages } from "./js/modal.js";
// Builder
import { buildTimeline } from "./js/timeline.js";
import { buildDetailsList, buildSpotsList } from "./js/list.js";
// Secondary Events
import { activeGuide, activeSpots } from "./js/active.js";
import { collapseButton } from "./js/collapse.js"
import { showPassword } from "./js/password.js"

// HTML Builders

// Build Timeline
const timelineContainer = document.querySelector(".timeline__list")
timeline.forEach((item) => {
  const timelineItems = buildTimeline(item);
  
  timelineContainer.innerHTML = timelineContainer.innerHTML + timelineItems
})

// Build Guide list
const detailsContainer = document.getElementById("guideContent")
details.forEach((item) => {
  const detailsItems = buildDetailsList(item);

  detailsContainer.innerHTML = detailsContainer.innerHTML + detailsItems
})

// Build Spots list
const spotsContainer = document.getElementById("spotsContent")
details.forEach((item) => {
  const spotsItems = buildSpotsList(item);

  spotsContainer.innerHTML = spotsContainer.innerHTML + spotsItems
})

// Build Modal Images List
const modalImages = document.getElementsByClassName(".modal__gallery")
details.forEach((item) => {
  const imagesItems = buildModalImages(item);

  modalImages.innerHTML = modalImages.innerHTML + imagesItems.innerHTML
})

// Build Guide Modal
const modalGuide = document.querySelector(".modal__guide")
details.forEach((item) => {
  const modalItem = buildGuideModal(item);

  modalGuide.innerHTML = modalGuide.innerHTML + modalItem
})

// Build Spots Modal
const modalSpots = document.querySelector(".modal__spots")
details.forEach((item) => {
  const spotsItem = buildSpotsModal(item);

  modalSpots.innerHTML = modalSpots.innerHTML + spotsItem
})

// Click Events

// Open Login Modal
document.getElementById('modalLogin').addEventListener('click', modalLogin);

// Close Login Modal
document.getElementById('closeLogin').addEventListener('click', closeLogin);

// Show password in login modal
document.getElementById('showPassword').addEventListener('click', showPassword);

// Click for Collapse Button
document.querySelector('#activeGuide').addEventListener('click', activeGuide);

// Click for Collapse Button
document.querySelector('#activeSpots').addEventListener('click', activeSpots);

// Click for Collapse Button
document.querySelector('#collapseButton').addEventListener('click', collapseButton);

// "x" icon for close modal
document.querySelector('#closeIcon').addEventListener('click', closeLogin);

// Close Area for modal 
document.querySelector(".modal__close").addEventListener('click', closeModalInfo)

// Timeline main dropdown
document.querySelector('#mainDropdownButton').addEventListener('click', openMainDropdown);
window.addEventListener('click', function(event) {
  if (!event.target.matches('#mainDropdownButton')) {
    var visible = document.getElementById('mainDropdown');
    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
})

// Function to close all dropdown

let buttons = document.querySelectorAll('.remove')
let dropdowns = document.querySelectorAll('.dropdown')

buttons.forEach(button => button.addEventListener('click', e => {
  let targetDropdown = e.target.nextElementSibling;
  Array.from(dropdowns).filter(dd => dd != targetDropdown).forEach(dd => dd.classList.remove('is-visible'));
  targetDropdown.classList.toggle('is-visible');
}));

document.addEventListener('click', e => {
  if(e.target.classList.contains('dropdown') || e.target.tagName === 'BUTTON')
    return;

  dropdowns.forEach(dd => dd.classList.remove('is-visible'))
  dropdowns.forEach(dd => dd.removeAttribute('data'))
})

  // Modal Close 

const closeModal = (id) => {
  var modal = document.querySelector(`[data-modal-info="${id}"]`);
  var close = document.querySelector(`[data-close="${id}"]`);

  if (modal.classList.contains('is-visible')) {
    close.classList.remove('is-visible');
    modal.classList.remove('is-visible')
  }
}

  // Exec Functions
  window.openUserDropdown = openUserDropdown
  window.openRoadmapDropdown = openRoadmapDropdown
  window.openGuideModal = openGuideModal
  window.openSpotsModal = openSpotsModal
  window.showPassword = showPassword
  window.openTimeLineModal = openTimeLineModal
  window.closeModal = closeModal
  window.activeSpots =  activeSpots
  window.activeGuide = activeGuide
