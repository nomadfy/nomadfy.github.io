import { destinations } from "./data/explore.json";
import { dropDownOptions, dropDownEdit, openDropDown, openDetailsDD, closeDropDown } from "./js/dropdown.js";
import { popUpInfo } from "./js/popup.js"
import { modal } from "./data/modal.json"
import { details } from "./data/details.json"
import { buildModal, buildInfo, buildDetails } from "./js/build.js"

// HTML Builders

const containerInfo = document.querySelector(".info__gallery")
destinations.forEach((item) => {
  const info = buildInfo(item);
  
  containerInfo.innerHTML = containerInfo.innerHTML + info
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
    var visible = document.getElementById('optionItem');
    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
})

document.querySelector('#editButton').addEventListener('click', dropDownEdit);
window.addEventListener('click', function(event) {
  if (!event.target.matches('#editButton')) {
    var visible = document.getElementById('editDropdown');
    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
})

document.querySelector('#infoButton').addEventListener('click', popUpInfo);
window.addEventListener('click', function(event) {
  if (!event.target.matches('#closeArea')) {
    var visible = document.getElementById('#info');
    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
})

document.querySelector('#closeArea').addEventListener('click', popUpInfo);
window.addEventListener('click', function(event) {
  if (!event.target.matches('#closeArea')) {
    var visible = document.getElementById('#info');
    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
})

document.querySelector('#close').addEventListener('click', popUpInfo);
window.addEventListener('click', function(event) {
  if (!event.target.matches('#close')) {
    var visible = document.getElementById('#info');
    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
})

// Exec Functions

window.openDropDown = openDropDown
window.openDetailsDD = openDetailsDD
window.closeDropDown = closeDropDown
