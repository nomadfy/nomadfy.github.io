var spots = document.getElementById('pontosTuristicos')
var guide = document.getElementById('roteiros')

export function activeSpots() {
  document.getElementById('pontosTuristicos').classList.toggle('is-showing');
  if(guide.className == 'is-showing') {
    document.getElementById('roteiros').classList.toggle('is-hidden')
  }
}

export function activeGuide() {
  document.getElementById('roteiros').classList.toggle('is-showing');
  if(spots.className == 'is-showing') {
    document.getElementById('pontosTuristicos').classList.remove('is-showing')
  }
}

