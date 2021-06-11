export const buildModal = (modal) => {
  return `
    <li class="modal__item in-column">
      <div class="in-row modal__time">
        <span class="modal__hour">${modal.hour}</span>
        <button class="button__menu button--right button--modal" onclick="openModalDD(${modal.id})">
          <svg class="icon__menu">
            <use xlink:href="#icon-menu"></use>
          </svg>
        </button>
        <div class="in-column">
          <ul class="dropdown" data-value="${modal.id}">
            <li class="dropdown__item"><a class="dropdown__text dropdown__link--details" href="#">Detalhes</a></li>
            <li class="dropdown__item"><a class="dropdown__text dropdown__link--reorder" href="#">Reordenar</a></li>
            <li class="dropdown__item"><a class="dropdown__text dropdown__link--hour" href="#">Alterar horário</a></li>
            <li class="dropdown__item"><a class="dropdown__text dropdown__link--calendar" href="#">Alterar data</a></li>
            <li class="dropdown__item"><a class="dropdown__text dropdown__text--red dropdown__link--delete" href="#">Remover ponto</a></li>
          </ul>
        </div>
      </div>
      <p class="modal__local">${modal.local}</p>
      <div class="details__rating details__rating--text in-row">    
        <svg class="icon__star">
            <use xlink:href="#icon-star"></use>
        </svg>
        <p class="details__grade details__grade--bold">${modal.gradeBold}</p>
        <p class="details__grade">${modal.grade}</p>
      </div>
      <div class="in-row modal__category">
        <p class="tag">natureza</p>
        <p class="tag">lazer</p>
      </div>
      <hr class="underline underline--shine underline__modal--margin" />
    </li>
  `
}

export const buildDetails = (details) => {
  return `
  <div class="details__items in-column">
    <div class="details__content in-row">
      <img class="details__image" src="${details.image}"/>
      <div class="details__rating--text in-column">
          <p class="details__title">${details.local}</p>
          <div class="details__rating in-row">
            <svg class="icon__star">
              <use xlink:href="#icon-star"></use>
            </svg>
            <p class="details__grade details__grade--bold">${details.gradeBold}</p>
            <p class="details__grade">${details.grade}</p>
          </div>
          <div class="in-row">
              <p class="tag">natureza</p>
              <p class="tag">lazer</p>
          </div>
      </div>
    </div>
    <div class="details__options in-row">
        <p class="details__text--options details__text--guide">3 dias</p>
        <div class="in-column details__button--info">
          <button class="button__menu has-margin-right" onclick="openInfo(${details.id})">
            <svg class="icon__info">
              <use xlink:href="#icon-info"></use>
              </svg>
            </button>
          </div>
        <div class="in-column details__button--menu"> 
          <button class="button__menu has-margin-right" onclick="openDetailsDD(${details.id})">
            <svg class="icon__menu">
              <use xlink:href="#icon-menu"></use>
            </svg>
          </button>
          <ul class="dropdown dropdown__option" data-details="${details.id}">
            <li class="dropdown__item"><a class="dropdown__text dropdown__link--check" href="#">Usar</a></li>
            <li class="dropdown__item"><a class="dropdown__text dropdown__link--save" href="#">Salvar</a></li>
            <li class="dropdown__item"><a class="dropdown__text dropdown__link--share" href="#">Compartilhar</a></li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="underline underline--shine" />
  `
}

export const buildInfo = (info) => {
  return`
  <div class="info" data-info="${info.id}">
    <div class="info__close" data-closeArea="${info.id}"></div>
    <div class="info__modal in-column">
      <div class="in-row">
          <p class="info__title">${info.local}</p>
          <button class="icon__close is-absolute-right" data-close="${info.id}"></button>
      </div>
      <hr class="underline underline--shine underline__info--margin" />
      <div class="details__rating details__rating--text in-row">
        <svg class="icon__star">
          <use xlink:href="#icon-star"></use>
        </svg>
        <p class="details__grade details__grade--bold">${info.gradeBold}</p>
        <p class="details__grade">${info.grade}</p>
        <p class="tag tag__margin">natureza</p>
        <p class="tag tag__margin">lazer</p>
      </div>
      <p class="info__text">${info.content}</p> 
      <a class="info__link" href="#">Clique para ver a descrição completa...</a>
      <div class="info__gallery in-row"></div>
      <div class="info__footer in-row">
        <button class="icon__arrow icon__arrow--left"></button>
        <button class="icon__arrow icon__arrow--right"></button>
      </div>
    </div>
  </div>
  `
}

export const buildInfoImages = (details) => {
  return `
  <img class="info__images" src="${details.image}">
  `
}
