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

// // Explore Scroll

// const slider = document.querySelector(".explore__components")
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('grabbing')
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// })

// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('grabbing')
// })

// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('grabbing')
// })

// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = x - startX;
//   slider.scrollLeft = scrollLeft - walk;
// })

// // Destination Scroll

//   const secondSlider = document.querySelector(".explore__components--destination")

//   secondSlider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     secondSlider.classList.add('grabbing')
//     startX = e.pageX - secondSlider.offsetLeft;
//     scrollLeft = secondSlider.scrollLeft;
//   })

//   secondSlider.addEventListener('mouseleave', () => {
//     isDown = false;
//     secondSlider.classList.remove('grabbing')
//   })

//   secondSlider.addEventListener('mouseup', () => {
//     isDown = false;
//     secondSlider.classList.remove('grabbing')
//   })

//   secondSlider.addEventListener('mousemove', (e) => {
//     if(!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - secondSlider.offsetLeft;
//     const walk = x - startX;
//     secondSlider.scrollLeft = scrollLeft - walk;
//   })

window.showPassword = showPassword
