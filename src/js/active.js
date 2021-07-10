var spots = document.getElementById('activeSpots')
var guide = document.getElementById('activeGuide')

export function activeSpots() {
  if(guide.className == 'is-active') {
    document.getElementById('roteiros').classList.toggle('is-showing')
    document.getElementById('pontosTuristicos').classList.remove('is-showing')
  }
}

export function activeGuide() {
  if(spots.className == 'is-active') {
    document.getElementById('pontosTuristicos').classList.toggle('is-showing')
    document.getElementById('roteiros').classList.remove('is-showing')
  }
}

