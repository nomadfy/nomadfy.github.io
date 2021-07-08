import { timeline } from "./data/timeline.json";
import { details } from "./data/details.json";
import { modal } from "./data/modal.json";
import { openMainDropdown, openUserDropdown, openRoadmapDropdown, openTimeLineModal } from "./js/dropdown.js";
import { openModalinfo, buildSpotsModal, buildGuideModal, modalLogin, closeLogin, closeModalInfo } from "./js/modal.js";
import { buildTimeline } from "./js/timeline.js";
import { buildDetailsList, buildSpotsList } from "./js/list.js";
import { activeGuide, activeSpots } from "./js/active.js";
import { collapseButton } from "./js/collapse.js"
import { showPassword } from "./js/password.js"
// HTML Builders

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

const modalGuide = document.querySelector(".modal__guide")
details.forEach((item) =>{
  const modalItem = buildGuideModal(item);

  modalGuide.innerHTML = modalGuide.innerHTML + modalItem
})

// Click Events

document.getElementById('modalLogin').addEventListener('click', modalLogin);

document.getElementById('closeLogin').addEventListener('click', closeLogin);

document.getElementById('showPassword').addEventListener('click', showPassword);

document.querySelector('#activeGuide').addEventListener('click', activeGuide);

document.querySelector('#activeSpots').addEventListener('click', activeSpots);

document.querySelector('#collapseButton').addEventListener('click', collapseButton);

document.querySelector('#closeIcon').addEventListener('click', closeLogin);

document.querySelector('#mainDropdownButton').addEventListener('click', openMainDropdown);
window.addEventListener('click', function(event) {
  if (!event.target.matches('#mainDropdownButton')) {
    var visible = document.getElementById('mainDropdown');
    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
})

document.querySelector(".modal__close").addEventListener('click', closeModalInfo)

// Dropdown Close

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
  window.openModalinfo = openModalinfo
  window.showPassword = showPassword
  window.openTimeLineModal = openTimeLineModal
  window.closeModal = closeModal
