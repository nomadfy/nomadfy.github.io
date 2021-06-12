export function openMainDropdown() {
  document.getElementById('mainDropdown').classList.toggle('is-visible');
}

export const openUserDropdown = (id) => {
  document.querySelector(`[data-dropdown-info="${id}"]`).classList.toggle('is-visible');
}

export const openRoadmapDropdown = (id) => {
  var t = document.querySelector(`[data-roadmap-info="${id}"]`).classList.toggle('is-visible');
}

export const openModalinfo = (id) => {
  document.querySelector(`[data-modal-info="${id}"]`).classList.toggle('is-visible');
}
