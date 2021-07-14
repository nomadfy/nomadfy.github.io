var guideTab = document.getElementById('activeGuide');
var spotsTab = document.getElementById('activeSpots');
var guideContent = document.getElementById('guideContent');
var spotsContent = document.getElementById('spotsContent');

export function activeSpots() {
  spotsTab.classList.add('is-active');
  guideTab.classList.remove('is-active');
  spotsContent.classList.add('is-showing');
  guideContent.classList.remove('is-showing');
}

export function activeGuide() {
  spotsTab.classList.remove('is-active');
  guideTab.classList.add('is-active');
  guideContent.classList.add('is-showing');
  spotsContent.classList.remove('is-showing');
}

export function activeModalTabs() {
  
}

