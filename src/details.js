import { destinations } from "./data/explore.json";
import { dropDownOptions, dropDownEdit, dropDownDetails,} from "./js/dropdown.js";
import { popUpInfo } from "./js/popup.js"
import { details } from "./data/details.json"

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

const modalContainer = document.querySelector(".modal__list")

const buildModal = (details) => {
  return `
    <li class="modal__list--item in-column">
      <div class="in-row modal__list--time">
        <span class="modal__hour">${details.hour}</span>
        <button class="button__menu button--right button--modal" onclick="buttonDropDown${details.id}">
          <svg class="icon__menu">
            <use xlink:href="#icon-menu"></use>
          </svg>
        </button>
      </div>
      <div class="in-column">
        <ul class="dropdown" data-Dropdown${details.id}">
          <li class="dropdown__item"><a class="dropdown__text dropdown__link--details" href="#">Detalhes</a></li>
          <li class="dropdown__item"><a class="dropdown__text dropdown__link--reorder" href="#">Reordenar</a></li>
          <li class="dropdown__item"><a class="dropdown__text dropdown__link--hour" href="#">Alterar horário</a></li>
          <li class="dropdown__item"><a class="dropdown__text dropdown__link--calendar" href="#">Alterar data</a></li>
          <li class="dropdown__item"><a class="dropdown__text dropdown__text--red dropdown__link--delete" href="#">Remover ponto</a></li>
        </ul>
      </div>
      <p class="modal__local">${details.local}</p>
      <div class="details__rating details__rating--text in-row">    
        <svg class="icon__star">
            <use xlink:href="#icon-star"></use>
        </svg>
        <p class="details__grade details__grade--bold">${details.gradeBold}</p>
        <p class="details__grade">${details.grade}</p>
      </div>
      <div class="in-row modal__category">
        <p class="tag">natureza</p>
        <p class="tag">lazer</p>
      </div>
      <hr class="underline underline--shine underline__modal--margin" />
    </li>
  `
}

details.forEach((item) => {
  const detailsItems = buildModal(item);
  
  modalContainer.innerHTML = modalContainer.innerHTML + detailsItems
})

