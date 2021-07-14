// Modal Spots

export const openSpotsModal = (id) => {
  document.querySelector(`[data-modal-spots="${id}"]`).classList.toggle('is-visible');
}

export const buildSpotsModal = (modal) => {
  return`
  <div class="modal" data-modal-spots="${modal.id}">
  <div class="modal__close" data-close-spots=${modal.id} onclick="closeModalSpots(${modal.id})"></div>
    <div class="modal__container modal__container--spots in-column">
      <div class="in-row">
        <p class="modal__title">${modal.local}</p>
        <button class="icon__close is-absolute-right" onclick="closeSpotsButton(${modal.id})"></button>
      </div>
      <hr class="underline underline--shine underline--modal--margin" />
      <div class="details__rating details__rating--text in-row">
        <svg class="icon__star">
          <use xlink:href="#icon-star"></use>
        </svg>
        <p class="details__grade details__grade--bold">${modal.gradeBold}</p>
        <p class="details__grade">${modal.grade}</p>
        <p class="tag tag__margin">natureza</p>
        <p class="tag tag__margin">lazer</p>
      </div>
      <p class="modal__text">"8 ipsum dolor sit amet, consectetur adipiscing elit. At diam in mauris varius maecenas adipiscing. Faucibus erat nisl vel, consequat aliquam vehicula neque, elementum. Non aliquam neque pharetra lacus, et elementum. Posuere ante tristique est faucibus pharetra. Turpis quisque arcu amet libero at dolor sit ipsum pellentesque."</p> 
      <a class="modal__link" href="#">Clique para ver a descrição completa...</a>
      <div class="modal__gallery in-row" data-images-spots></div>
      <div class="modal__footer in-row">
        <button class="icon__arrow icon__arrow--left"></button>
        <button class="icon__arrow icon__arrow--right"></button>
      </div>
    </div>
  </div>
  `
}

export const modalImages = (details) => {
  return `
  <img class="modal__images" src="${details.image}">
  `
}

// Modal Guide

export const openGuideModal = (id) => {
  document.querySelector(`[data-modal-guide="${id}"]`).classList.toggle('is-visible');
}

export const buildGuideModal = (modal) => {
  return `
<div class="modal modal__guide" data-modal-guide="${modal.id}">
<div class="modal__close" data-close=${modal.id} onclick="closeModal(${modal.id})"></div>
<div class="in-row">
  <div class="modal__container modal__container--guide in-column">
    <div class="in-row">
      <p class="modal__title">${modal.local}</p>
      <button class="icon__close is-absolute-right" data-button-close-guide="${modal.id}"></button>
    </div>
    <hr class="underline underline--shine underline__modal--margin" />
    <div class="in-row">
      <div class="modal__spots in-column">
        <div class="details__rating--modal details__rating--text in-row">
          <svg class="icon__star">
            <use xlink:href="#icon-star"></use>
          </svg>
          <p class="details__grade details__grade--bold">${modal.gradeBold}</p>
          <p class="details__grade details__grade--margin">${modal.grade}</p>
          <p class="tag tag__margin">natureza</p>
          <p class="tag tag__margin">lazer</p>
        </div>
        <div class="modal__select in-row">
          <p>Dia<select class="select" name="days">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          </select></p><span>de 6</span>
        </div>
        <ul class="modal__list in-column" data-list="${modal.id}">
        </ul>
      </div>
      <div class="modal__content in-column">
        <div class="details__rating details__rating--text in-row">
          <svg class="icon__star">
            <use xlink:href="#icon-clock"></use>
          </svg>
          <p class="details__grade details__grade--margin"> 11:00 às 15:00 </p>
          <svg class="icon__star">
            <use xlink:href="#icon-star"></use>
          </svg>
          <p class="details__grade details__grade--bold">${modal.gradeBold}</p>
          <p class="details__grade details__grade--margin">${modal.grade}</p>
          <p class="tag tag__margin">natureza</p>
          <p class="tag tag__margin">lazer</p>
        </div>
        <p class="modal__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At diam in mauris varius maecenas adipiscing. Faucibus erat nisl vel, consequat aliquam vehicula neque, elementum. Non aliquam neque pharetra lacus, et elementum. Posuere ante tristique est faucibus pharetra. Turpis quisque arcu amet libero at dolor sit ipsum pellentesque.</p><a class="modal__link" href="#">Clique para ver a descri&ccedil;&atilde;o completa...</a>
        <div class="modal__gallery in-row" data-images-guide="${modal.id}"></div>
        <div class="modal__footer in-row">
          <button class="icon__arrow icon__arrow--left"></button>
          <button class="icon__arrow icon__arrow--right"></button>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
  `
}

export const modalList = (modal) => {
  return `
  <li class="modal__item">
    <a> ${modal.local} </a>
  `
}

export function modalLogin() {
  document.getElementById('login').classList.toggle('is-visible');
  document.getElementById('closeLogin').classList.toggle('is-visible');
}

export function closeLogin() {
  document.getElementById('login').classList.remove('is-visible');
  document.getElementById('closeLogin').classList.remove('is-visible');
}
