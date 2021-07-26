let openedItem;

export function openMainDropdown() {
  document.getElementById('mainDropdown').classList.toggle('is-visible');
}

export const openUserDropdown = (id) => {
  openedItem = document.querySelector(`[data-dropdown-info="${id}"]`);
  openedItem.classList.toggle('is-visible');
}

export const openTimeLineModal = (id) => {
  var container = document.querySelector(`[data-dropdown-info="${id}]`).classList.toggle('is-visible');
}

export const openGuideDropdown = (id) => {
  var container = document.querySelector(`[data-guide-dd="${id}"]`).classList.toggle('is-visible');
  var attribute = document.querySelector(`[data-guide-dd="${id}"]`).setAttribute('data', 'remove')
}

export const openSpotsDropdown = (id) => {
  var container = document.querySelector(`[data-spots-dd="${id}"]`).classList.toggle('is-visible');
  var attribute = document.querySelector(`[data-spots-dd="${id}"]`).setAttribute('data', 'remove')
}

