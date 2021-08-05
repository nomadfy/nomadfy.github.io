import { guide, destinations } from "./data/explore.json";
import { showPassword } from "./js/password.js";
import { modalLogin, closeLogin } from "./js/modal.js";

const containerGuide = document.querySelector(".explore__components");
const containerDest = document.querySelector(".explore__components--destination");

document.getElementById('modalLogin').addEventListener('click', modalLogin);

document.getElementById('closeLogin').addEventListener('click', closeLogin);

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

var button = document.getElementById('guideScrollLeft');
button.onclick = function () {
  var container = document.querySelector('.explore__components');
  sideScroll(container,'left', 5,0,10);
};

var back = document.getElementById('guideScrollRight');
back.onclick = function () {
  var container = document.querySelector('.explore__components');
  sideScroll(container, 'right',5,0,10)
}

function sideScroll(element,direction,speed,distance,step){
  scrollAmount = 0;
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
