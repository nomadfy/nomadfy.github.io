// Data
import { timeline } from "./data/timeline.json";
import { details } from "./data/details.json";
import { modal } from "./data/modal.json";
// DropDown
import { openMainDropdown, openUserDropdown, openGuideDropdown, openTimeLineModal, openSpotsDropdown } from "./js/dropdown.js";
// Modal
import { openGuideModal, openSpotsModal, buildSpotsModal, buildGuideModal, modalLogin, closeLogin, closeModalInfo, modalList, modalImages } from "./js/modal.js";
// Builder
import { buildTimeline } from "./js/timeline.js";
import { buildDetailsList, buildSpotsList } from "./js/list.js";
// Secondary Events
import { activeGuide, activeSpots } from "./js/active.js";
import { collapseButton } from "./js/collapse.js"
import { showPassword } from "./js/password.js"

//API
// function getUrl(url) {
//   let request = new XMLHttpRequest()
//   request.open("GET", url, false)
//   request.send()
//   return request.responseText
// }

// function user(user) {

// }

// function main() {
//   console.log(getUrl("https://api-nomadfy.herokuapp.com/places/search-text"))
// }
// main()

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

// Build Modal Elements 
window.onload = function buildModalImages () {

  // Build Modal Images for Spots Modal
  details.forEach((item) => {
    const modalImagesSpots = document.querySelector(`[data-images-spots="${item.id}"]`)
    const imageItems = modalImages(item);

    modalImagesSpots.innerHTML = modalImagesSpots.innerHTML + imageItems
  })
  
  // Build Modal Images for Guide Modal
  modal.forEach((item) => {
    const modalImagesGuide = document.querySelector(`[data-images-guide="${item.id}"]`)
    const imageItems = modalImages(item);

    modalImagesGuide.innerHTML = modalImagesGuide.innerHTML + imageItems
  })
  
  // Build Modal List  
  modal.forEach((item) => {
    const modalListContainer = document.querySelector(`[data-list="${item.id}"]`)
    const modalListItems = modalList(item);
    
    modalListContainer.innerHTML = modalListContainer.innerHTML + modalListItems
  })
}


// Build Guide Modal
const modalGuide = document.querySelector(".modal__guide")
details.forEach((item) => {
  const modalItem = buildGuideModal(item);

  modalGuide.innerHTML = modalGuide.innerHTML + modalItem
})

// Build Spots Modal
const modalSpots = document.querySelector("[data-modal-spots]")
details.forEach((item) => {
  const spotsItem = buildSpotsModal(item);

  modalSpots.innerHTML = modalSpots.innerHTML + spotsItem
})

// Click Events

// Open Login Modal
document.getElementById('modalLogin').addEventListener('click', modalLogin);

// Close Login Modal
document.getElementById('closeLogin').addEventListener('click', closeLogin);

// "x" icon for close Login modal
document.querySelector('#closeIcon').addEventListener('click', closeLogin);

// Show password in login modal
document.getElementById('showPassword').addEventListener('click', showPassword);

// Click for Collapse Button
document.querySelector('#activeGuide').addEventListener('click', activeGuide);

// Click for Collapse Button
document.querySelector('#activeSpots').addEventListener('click', activeSpots);

// Click for Collapse Button
document.querySelector('#collapseButton').addEventListener('click', collapseButton);

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
  var modalGuide = document.querySelector(`[data-modal-guide="${id}"]`);
  var closeGuide = document.querySelector(`[data-close="${id}"]`);

  if (modalGuide.classList.contains('is-visible')) {
    closeGuide.classList.remove('is-visible');
    modalGuide.classList.remove('is-visible')
  }
}

const closeModalSpots = (id) => {
  var modalSpots = document.querySelector(`[data-modal-spots="${id}"]`)
  var closeSpots = document.querySelector(`[data-close-spots="${id}"]`)

  if (modalSpots.classList.contains('is-visible')) {
    closeSpots.classList.remove('is-visible');
    modalSpots.classList.remove('is-visible');
  }
}

const closeSpotsButton = (id) => {
  var modalSpots = document.querySelector(`[data-modal-spots="${id}"]`)
  var closeSpots = document.querySelector(`[data-close-spots="${id}"]`)
  
  if (modalSpots.classList.contains('is-visible')) {
    closeSpots.classList.remove('is-visible');
    modalSpots.classList.remove('is-visible');
  }
}

const closeGuideButton = (id) => {
  var modalGuide = document.querySelector(`[data-modal-guide="${id}"]`)
  var closeGuide = document.querySelector(`[data-close="${id}"]`)

  if (modalGuide.classList.contains('is-visible')) {
    closeGuide.classList.remove('is-visible');
    modalGuide.classList.remove('is-visible');
  }
}

// function hideEnter(label) {
//   document.getElementById('enter').disable = (label.value.length == 0)
// }

  // Exec Functions
    window.openUserDropdown = openUserDropdown
    window.showPassword = showPassword
    window.openTimeLineModal = openTimeLineModal
    //Guide  
    window.openGuideDropdown = openGuideDropdown
    window.openGuideModal = openGuideModal
    window.activeGuide = activeGuide
    window.closeModal = closeModal
    //Spots
    window.activeSpots =  activeSpots
    window.openSpotsDropdown = openSpotsDropdown
    window.openSpotsModal = openSpotsModal
    window.closeSpotsButton = closeSpotsButton
    window.closeGuideButton = closeGuideButton
    window.closeModalSpots = closeModalSpots
