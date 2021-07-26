export const buildTimeline = (modal) => {
  return `
    <li class="timeline__item in-column">
      <div class="in-row timeline__time">
        <span class="timeline__hour">${modal.hour}</span>
        <button class="button__timeline button__menu button--right button--modal" data-dropdown-click="${modal.id}" onclick="openUserDropdown(${modal.id}, event)">
          <svg class="icon__menu">
            <use xlink:href="#icon-menu"></use>
          </svg>
        </button>
        <div class="in-column">
          <ul class="dropdown dropdown--margin" data-dropdown-info="${modal.id}">
            <li class="dropdown__item"><a class="dropdown__text dropdown__link--details" href="#">Detalhes</a></li>
            <li class="dropdown__item"><a class="dropdown__text dropdown__link--reorder" href="#">Reordenar</a></li>
            <li class="dropdown__item"><a class="dropdown__text dropdown__link--hour" href="#">Alterar horário</a></li>
            <li class="dropdown__item"><a class="dropdown__text dropdown__link--calendar" href="#">Alterar data</a></li>
            <li class="dropdown__item"><a class="dropdown__text dropdown__text--red dropdown__link--delete" href="#">Remover ponto</a></li>
          </ul>
        </div>
      </div>
      <p class="timeline__local">${modal.local}</p>
      <div class="details__rating details__rating--text in-row">    
        <svg class="icon__star">
            <use xlink:href="#icon-star"></use>
        </svg>
        <p class="details__grade details__grade--bold">${modal.gradeBold}</p>
        <p class="details__grade">${modal.grade}</p>
      </div>
      <div class="in-row timeline__category">
        <p class="tag">natureza</p>
        <p class="tag">lazer</p>
      </div>
      <hr class="underline underline--shine underline__timeline--margin" />
    </li>
  `
}
