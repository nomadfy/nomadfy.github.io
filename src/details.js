import { dropDownOptions, dropDownEdit, dropDownDetails } from "./js/dropdown.js"

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

document.querySelector('#detailsButton').addEventListener('click', dropDownDetails);

window.addEventListener('click', function(event) {
  if (!event.target.matches('#detailsButton')) {
    var visible = document.getElementById('detailsDropdown');
    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
})

