import { destinations } from "./data/explore.json";
import { dropDownOptions, dropDownEdit, dropDownDetails,} from "./js/dropdown.js";
import { popUpInfo } from "./js/popup.js"

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

document.querySelector('#detailsButton').addEventListener('click', dropDownDetails);

window.addEventListener('click', function(event) {
  if (!event.target.matches('#detailsButton')) {
    var visible = document.getElementById('detailsDropdown');
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

const containerInfo = document.querySelector(".info__gallery")

const buildInfo = (destinations) => {
  return `
  <img class="info__images" src="${destinations.image}">
  `
}

destinations.forEach((item) => {
  const info = buildInfo(item);
  
  containerInfo.innerHTML = containerInfo.innerHTML + info
})


