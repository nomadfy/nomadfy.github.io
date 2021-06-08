export function dropDownOptions() {
  document.getElementById('optionItem').classList.toggle('is-visible');
}

export function dropDownEdit() {
  document.getElementById('editDropdown').classList.toggle('is-visible');
}

export function detailsDropDown() {
  document.querySelector(`[data-value="${id}"]`).classList.toggle('is-visible');
}

