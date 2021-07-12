export const buildDetailsList = (details) => {
  return `
  <div id="roteiros" class="details__items in-column">
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
          <button class="button__menu has-margin-right" onclick="openGuideModal(${details.id})">
            <svg class="icon__info">
              <use xlink:href="#icon-info"></use>
              </svg>
          </button>
        </div> 
        <div class="in-column details__button--menu"> 
          <button class="button__menu has-margin-right" onclick="openRoadmapDropdown(${details.id})">
            <svg class="icon__menu">
              <use xlink:href="#icon-menu"></use>
            </svg>
          </button>
          <ul class="dropdown dropdown__option" data-roadmap-info="${details.id}">
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

export const buildSpotsList = (details) => {
  return `
  <div id="pontosTuristicos" class="details__items in-column">
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
        <div class="in-column details__button--info">
          <button class="button__menu has-margin-right" onclick="openSpotsModal(${details.id})">
            <svg class="icon__info">
              <use xlink:href="#icon-info"></use>
              </svg>
          </button>
        </div> 
        <div class="in-column details__button--menu"> 
          <button class="button__menu has-margin-right" onclick="openRoadmapDropdown(${details.id})">
            <svg class="icon__menu">
              <use xlink:href="#icon-menu"></use>
            </svg>
          </button>
          <ul class="dropdown dropdown__option" data-roadmap-info="${details.id}">
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

