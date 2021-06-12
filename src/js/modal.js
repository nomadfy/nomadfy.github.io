export const openModalinfo = (id) => {
  document.querySelector(`[data-modal-info="${id}"]`).classList.toggle('is-visible');
}

export const buildModal = (modal) => {
  return`
  <div class="modal" data-modal-info="${modal.id}">
    <div class="modal__close" data-closeArea="${modal.id}"></div>
    <div class="modal__modal in-column">
      <div class="in-row">
        <p class="modal__title">${modal.local}</p>
        <button class="icon__close is-absolute-right" data-close="${modal.id}"></button>
      </div>
      <hr class="underline underline--shine underline__modal--margin" />
      <div class="details__rating details__rating--text in-row">
        <svg class="icon__star">
          <use xlink:href="#icon-star"></use>
        </svg>
        <p class="details__grade details__grade--bold">${modal.gradeBold}</p>
        <p class="details__grade">${modal.grade}</p>
        <p class="tag tag__margin">natureza</p>
        <p class="tag tag__margin">lazer</p>
      </div>
      <p class="modal__text">${modal.content}</p> 
      <a class="modal__link" href="#">Clique para ver a descrição completa...</a>
      <div class="modal__gallery in-row"></div>
      <div class="modal__footer in-row">
        <button class="icon__arrow icon__arrow--left"></button>
        <button class="icon__arrow icon__arrow--right"></button>
      </div>
    </div>
  </div>
  `
}

export const buildModalImages = (details) => {
  return `
  <img class="modal__images" src="${details.image}">
  `
}
