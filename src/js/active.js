export function activeSpots() {
  document.getElementById('pontosTuristicos').classList.toggle('is-active');
  document.getElementById('roteiros').classList.remove('is-active')
}

export function activeGuide() {
  document.getElementById('roteiros').classList.toggle('is-active');
  document.getElementById('pontosTuristicos').classList.remove('is-active')
}

