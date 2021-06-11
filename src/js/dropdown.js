export function dropDownOptions() {
  document.getElementById('editDropDown').classList.toggle('is-visible');
}

export const openModalDD = (id) => {
  document.querySelector(`[data-value="${id}"]`).classList.toggle('is-visible');
}

export const openDetailsDD = (id) => {
  var t = document.querySelector(`[data-details="${id}"]`).classList.toggle('is-visible');
}

export const openInfo = (id) => {
  document.querySelector(`[data-info="${id}"]`).classList.toggle('is-visible');
}
