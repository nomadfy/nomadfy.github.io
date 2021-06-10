export function dropDownOptions() {
  document.getElementById('optionItem').classList.toggle('is-visible');
}

export const openModalDD = (id) => {
  document.querySelector(`[data-value="${id}"]`).classList.toggle('is-visible');
}

export const openDetailsDD = (id) => {
  var t = document.querySelector(`[data-details="${id}"]`);
  t.classList.toggle('is-visible')
  if (t.classList.contains('is-visible')){
    window.addEventListener('click', function(event) {
      if (!event.target.matches(t)) {
        t.classList.remove('is-visible')
        }
    })
  }
}


