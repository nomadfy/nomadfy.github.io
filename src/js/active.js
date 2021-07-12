var guideTab = document.getElementById('activeGuide');
var spotsTab = document.getElementById('activeSpots');
var guideContent = document.getElementById('roteiros');
var spotsContent = document.getElementById('pontosTuristicos');

export function activeSpots() {
  spotsTab.classList.add('is-active');
  guideTab.classList.remove('is-active');
  guideContent.classList.add('is-showing');
  spotsContent.classList.remove('is-showing');
}

export function activeGuide() {
  spotsTab.classList.remove('is-active');
  guideTab.classList.add('is-active');
  spotsContent.classList.add('is-showing');
  guideContent.classList.remove('is-showing');
}

