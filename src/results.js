import { dropDownOptions } from "./js/dropdown.js"

document.querySelector('#optionsButton').addEventListener('click', dropDownOptions);

window.addEventListener('click', function(event) {
  if (!event.target.matches('#optionsButton')) {
    var visible = document.getElementById('optionItem');
    if (visible.classList.contains('is-visible')) {
      visible.classList.remove('is-visible');
    }
  }
})
