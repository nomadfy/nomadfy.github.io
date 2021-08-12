import { guide, destinations } from "./data/explore.json";
import { showPassword } from "./js/password.js";
import { modalLogin, closeLogin } from "./js/modal.js";

const containerGuide = document.querySelector(".explore__components");
const containerDest = document.querySelector(".explore__components--destination");

document.getElementById('modalLogin').addEventListener('click', modalLogin);

document.getElementById('closeLogin').addEventListener('click', closeLogin);

document.querySelector('#closeIcon').addEventListener('click', closeLogin);

document.getElementById('showPassword').addEventListener('click', showPassword);

const buildGuide = (guide) => {
  return `
  <a class="explore__card" href="/details/index.html">
    <img class="explore__image" src="${guide.image}">
    <div class="explore__linear">
      <h2 class="explore__subtitles explore__subtitles--guide">${guide.title}</h3>
      <div class="explore__location">
        <svg class="explore__icon">
          <use xlink:href="#icon-location"></use>
        </svg>
        <h3 class="explore__city" data-city="">${guide.city}</p>
      </div>
    </div>
  </a>
  `;
};

const buildDestination = (destinations) => {
  return `
  <a class="explore__card" href="/details/index.html">
    <img class="explore__image" src="${destinations.image}">
    <div class="explore__linear">
      <h3 class="explore__subtitles explore__subtitles--dest">${destinations.city}</h3>
      <p class="explore__days"> 3 dias </p>
    </div>
  </a>
`;
};

destinations.forEach((item) => {
  const destination = buildDestination(item);
  
  containerDest.innerHTML = containerDest.innerHTML + destination;
});

guide.forEach((item) => {
  const guide = buildGuide(item);

  containerGuide.innerHTML = containerGuide.innerHTML + guide;
})

// Explore Scroll

var leftGuide = document.getElementById('guideScrollLeft');
leftGuide.onclick = function () {
  var container = document.querySelector('.explore__components');
  sideScroll(container,'left',25,100,10);
};

var rightGuide = document.getElementById('guideScrollRight');
rightGuide.onclick = function () {
  var container = document.querySelector('.explore__components');
  sideScroll(container, 'right',25,100,10)
}

var leftDest = document.getElementById('destScrollLeft');
leftDest.onclick = function () {
  var container = document.querySelector('.explore__components--destination');
  sideScroll(container,'left',25,100,10);
};

var rightDest = document.getElementById('destScrollRight');
rightDest.onclick = function () {
  var container = document.querySelector('.explore__components--destination');
  sideScroll(container, 'right',25,100,10)
}

function sideScroll(element,direction,speed,distance,step){
  var scrollAmount = 0;
  var slideTimer = setInterval(function(){
      if(direction == 'left'){
          element.scrollLeft -= step;
      } else {
          element.scrollLeft += step;
      }
      scrollAmount += step;
      if(scrollAmount >= distance){
          window.clearInterval(slideTimer);
      }
  }, speed);
}

window.showPassword = showPassword
